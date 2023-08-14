let localStream;
let remoteStream;
let socket;
let stompClient;
let roomName;
let password;
let isJoining;
let isStarted;

let localVideo;
let remoteVideo;


// 로컬 스트림을 얻고, 셀프뷰에 보여주고 전송을 위해 추가하기
const localStreamConstraints = {
    video: true,
    audio: false
};

const pcConfig = {
    iceServers: [{
        urls: ['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
    }]
}

const socketUrl = 'ws://localhost:3000/websocket';

export let create = async (room, pwd) => {
    roomName = room;
    password = pwd;

    socket = new WebSocket(socketUrl);

    socket.onopen = function (event) {
        console.log("1. 웹소켓이 연결되었습니다");

        // JSON 형식으로 메시지 보내기
        socket.send(JSON.stringify({
            type: "Create",
            roomName,
            password
        }));

    };
    
    socket.onmessage = async function (event) {
        let receivedData = event.data;
        let receivedJson = JSON.parse(receivedData);
        console.log("Received message from server:", receivedJson);
        
        
        if (receivedJson.type == 'Inform') {
            if (receivedJson.data == 'Created') {
                localStream = await navigator.mediaDevices.getUserMedia(localStreamConstraints);        

                localVideo = document.querySelector('#user-1');
                remoteVideo = document.querySelector('#user-2');

                localVideo.srcObject = localStream;
            } else if (receivedJson.data == 'Failed') {
                this.alreadyExist = true;
                this.blankWarning = false;
            } else if (receivedJson.data == 'Joined') {
                console.log("엥ㅇ...")
                const pc = new RTCPeerConnection(pcConfig);
                console.log("peerConnection 생성!")
                pc.onicecandidate = ({
                    candidate
                }) => socket.send({
                    type: 'Ice',
                    data: candidate
                });
                pc.onnegotiationneeded = async () => {
                    try {
                        await pc.setLocalDescription();
                        // 다른 피어에게 offer를 보낸다
                        signaling.send({
                            description: pc.localDescription
                        });
                    } catch (err) {
                        console.error(err);
                    }
                };
                pc.ontrack = ({
                    track,
                    streams
                }) => {
                    // 원격 트랙용 미디어가 도착하면, 원격 비디오 요소에 표시
                    track.onunmute = () => {
                        // 만약 srcObject 가 설정되어 있으면, 다시 설정하지 않는다
                        if (remoteVideo.srcObject) return;
                        remoteVideo.srcObject = streams[0];
                    };
                };

            }
        }

    };

    socket.onclose = function (event) {
        console.log("웹소켓 연결이 끊겼습니다.");
    };

};


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

export let join = async (room, pwd) => {
    roomName = room;
    password = pwd;

    socket = new WebSocket(socketUrl);

    socket.onopen = function (event) {
        console.log("1. 웹소켓이 연결되었습니다");


        socket.send(JSON.stringify({
            type: "Join",
            roomName,
            password
        }));

    };

    socket.onmessage = async function (event) {
        let receivedData = event.data;

        let receivedJson = JSON.parse(receivedData);
        console.log("Received message from server:", receivedJson);

        if (receivedJson.type == 'Inform') {
            if (receivedJson.data == 'Wrong') {
                alert("방 이름 또는 비밀번호를 확인해주세요.")
            } else if (receivedJson.data == 'Full') {
                alert("해당 방의 인원이 초과되었습니다.")
            } else if (receivedJson.data == 'Joined') {
                localStream = await navigator.mediaDevices.getUserMedia(localStreamConstraints);        

                localVideo = document.querySelector('#user-1');
                remoteVideo = document.querySelector('#user-2');

                localVideo.srcObject = localStream;
            }
        }
    };

    socket.onclose = function (event) {
        console.log("웹소켓 연결이 끊겼습니다.");
    };
}

export let close = () => {
    socket.close();
}