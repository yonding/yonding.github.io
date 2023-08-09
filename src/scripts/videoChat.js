const SockJS = require('sockjs-client');
const Stomp = require('stompjs');
const uuidv4 = require('uuid').v4;

let isChannelReady = false;
let isInitiator = false;
let isStarted = false;
let localStream;
let peerConnection;
let remoteStream;
let turnReady;
let socket;
let stompClient;
let roomName;
let password;
let userId;

const localStreamConstraints = {
    video: true,
    audio: false
};

const peerConnectionConfig = {
    iceServers: [{
        urls: ['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
    }]
}

const socketUrl = 'ws://localhost:3000/socket';

export let create = async (room, pwd) => {
    roomName = room;
    password = pwd;

    userId = uuidv4();
    socket = new WebSocket(socketUrl);
    stompClient = Stomp.over(socket);

    
    // 피어 연결 생성
    
    stompClient.connect({}, async function () {
        console.log('Connected to WebSocket as Room Initiator!');
        // 미디어 스트림 가져오기 (웹캠과 마이크)
        const localStream = await navigator.mediaDevices.getUserMedia(localStreamConstraints);
    
        const localVideo = document.querySelector('#user-1');
        const remoteVideo = document.querySelector('#user-2');
    
        localVideo.srcObject = localStream;

        // 방을 생성한다. 
        stompClient.send('/app/createRoom', {}, JSON.stringify({
            roomName,
            password,
            userId
        }));

        // 해당 방을 구독한다.
        stompClient.subscribe('/room/' + roomName, async function (message) {
            if (message === 'joined') {
                // Offer를 생성한다.
                const peerConnection = new RTCPeerConnection(peerConnectionConfig);
                const offer = await peerConnection.createOffer();
                await peerConnection.setLocalDescription(offer);
                console.log("Created offer: " + offer);
            }
        });

        // 메세지를 보낸다.
        // stompClient.send('/app/sendMessage/' + roomName, {}, "hihihi");
    });

    socket.onclose = () => {
        fetch('http://localhost:3000/close', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data == false) {
                        this.warning = true;
                    } else if (this.roomName !== '' && this.password !== '') {
                        this.isJoining = false;
                        this.isStarted = true;
                        join(this.roomName, this.password);
                    } else {
                        this.warning = true;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
    }

};

export let join = async (room, pwd) => {
    roomName = room;
    password = pwd;

    socket = new WebSocket(socketUrl);
    stompClient = Stomp.over(socket);

    // 피어 연결 생성
    stompClient.connect({}, async function () {
        // 미디어 스트림 가져오기 (웹캠과 마이크)
        const localStream = await navigator.mediaDevices.getUserMedia(localStreamConstraints);
    
        const localVideo = document.querySelector('#user-1');
        const remoteVideo = document.querySelector('#user-2');
    
        localVideo.srcObject = localStream;
        console.log('Connected to WebSocket as Participant!');


        // 방을 생성한다. 
        stompClient.send('/app/joinRoom', {}, JSON.stringify({
            roomName,
            password,
            userId
        }));

        // 해당 방을 구독한다.
        stompClient.subscribe('/room/' + roomName, async function (message) {
            if (message === 'joined') {
                // Offer를 생성한다.
                const peerConnection = new RTCPeerConnection(peerConnectionConfig);
                const offer = await peerConnection.createOffer();
                await peerConnection.setLocalDescription(offer);
                console.log("Created offer: " + offer);
            }
        });

        // 참여했음을 알린다.
        stompClient.send('/app/sendMessage/' + roomName, {}, "joined");
    });

}

export let close = ()=>{
    fetch('http://localhost:3000/close', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data == false) {
                        this.warning = true;
                    } else if (this.roomName !== '' && this.password !== '') {
                        this.isJoining = false;
                        this.isStarted = true;
                        join(this.roomName, this.password);
                    } else {
                        this.warning = true;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
}