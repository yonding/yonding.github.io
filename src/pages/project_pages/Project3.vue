<template>
    <div class="p3-container container text-center">
        <br>
        <img id="webrtcImg" src="@/assets/card_img/card_img_3.png" alt="webRTC" />
        <br><br><br>
        <h2>Peer To Peer</h2>
        <p>
            WebRTC 로고를 구성하는 다섯 가지의 색상으로 이루어진 배경.<br> 마주 본 두 얼굴은 중앙 서버를 거치지 않고 직접 소통하는 P2P 통신 방식을 표현했다.<br><br> 특히, 두 얼굴 사이에 존재하는 희미한 "WEB RTC"라는 글자들은<br> 두 사람의 실시간 소통이 WebRTC라는 구체적인 기술을 통해 가능함을 나타낸다.
            <br><br>
        </p>
        <br>
        <hr>
        <div class="introduction">
            <div class="text">
                <h2>P2P가 무엇인가요?</h2>
                <p>
                    <br/>
                    <img src="@/assets/project_img/project3/server-client.jpeg" alt="serverClientImg" width="50%"><br><br> 서버가 존재하는 <strong>클라이언트-서버 모델</strong>에서는<br> "client2와 client3에게 '안녕'이라고 전해줄래?"라는 client1의 요청이 중앙 서버로 전송되면<br/> 서버가 client1의 요청대로 client2와
                    client3에게
                    <br> "client1이 너네한테 '안녕'이래!"라고 전해주는 방식으로 동작합니다.<br/><br> 우리가 자주 사용하는 카카오톡과 인스타그램은<br> 서버가 존재하는 클라이언트-서버 모델을 기반으로 운영됩니다.
                    <br/><br><br> 반면에 <strong>P2P</strong>는 Peer-to-Peer의 약어로 <br/> 중앙 서버 없이 개별 컴퓨터들 간에 직접적으로 데이터를 주고받는 통신 방식을 의미합니다.<br/><br/>
    
                    <img src="@/assets/project_img/project3/p2p.jpeg" alt="p2pImg" width="60%"><br> client1이 client2와 client3에게 "안녕"이라고 전하기 위해서<br /> 클라이언트-서버 시스템에서는 서버에게 한 번의 요청을 보내면 되었지만<br /> P2P 시스템에서는 client1이 직접 client2와 client3에게 "안녕"이라는 컨텐츠를 두 번 전송해야
                    합니다.
                    <br> (만약 채팅방에 10명이 있었다면 10명의 클라이언트에게 열 번의 전송을 해야 합니다.)<br><br> 이 방식에서는 peer to peer 로 직접 데이터를 주고받기 때문에<br /> 서버 자원을 아낄 수 있다는 장점이 있지만<br> 클라이언트는 서버가 해주던 일(데이터를 대신 전해주는 일)을 직접 해야 합니다.<br><br> Torrent는 서버 없이도 클라이언트들이 서로 파일을 공유하기 위해 개발된 P2P
                    기술 중 하나입니다.<br> Torrent를 사용해 본 사람들은 "시드 유지 부탁드립니다."라는 말을 들어봤을 텐데,<br> 이 말은 "누군가 서버 역할을 자처해서 너에게 파일을 공유해줬으니<br> 다운로드를 완료한 후부터는 네가 서버의 역할을 자처해줘."라는 뜻입니다.
    
                </p>
                <br /><br />
                <hr><br /><br>
                <h2>P2P와 블록체인</h2><br>
                <p>
                    클라이언트-서버 모델과 P2P에 대해 위에서 설명했는데,<br> 요즘 핫한 <strong>블록체인이 P2P 기반</strong>의 기술인 것을 아시나요?<br><br><br>
    
                    <img src="@/assets/project_img/project3/bank.jpeg" alt="p2pImg" width="70%"><br> 우리가 기존에 이용했던 하나은행, 신한은행과 같은 은행들은<br> 각 은행마다 서버를 두고 금융 거래 내역을 은행 서버에 저장해둡니다.<br><br> 물론 은행도 여러 방법으로 보안에 신경쓰고 문제 상황에 대비하겠지만<br> 만약 은행 서버가 털린다면 우리의 통장에 있던 돈은
                    전부 사라지겠죠?<br><br> 이런 운영 방식은 클라이언트-서버 모델과 비슷하다고 할 수 있습니다.<br><br><br> 반면에 <strong>블록체인 기술</strong>은 어떤 거래가 발생했을 때 해당 거래에 대한 정보를<br>
                    <strong>중앙 서버에 저장하지 않고 여러 컴퓨터에 분산시켜 저장</strong>하도록 합니다.<br>
                    <img src="@/assets/project_img/project3/blockchain.jpeg" alt="p2pImg" width="65%"><br> 분산되어 있는 여러 컴퓨터들은 거래 정보를 저장해주고<br> 해당 정보에 오류가 없는지 확인해주는 대신에 이에 대한 보상을 받습니다.<br><br> 거래 정보가 수많은 컴퓨터에 저장되어 있으니<br> 몇몇 컴퓨터의 정보가 사라지거나 변경된다고 해도<br> 다른 여러
                    컴퓨터들과 비교해보면 되니 안전할 것입니다.<br><br> 기존의 은행과 비교해보니 블록체인을 왜 P2P 기반의 기술이라고 하는지 아시겠죠?<br>
                </p>
                <br><br>
                <hr><br><br>
                <h2>그나저나 WebRTC는 무엇인가요?</h2><br>
                <p>
                    P2P에 대해서 하고 싶은 말이 많다보니 이제야 WebRTC에 대해 이야기하게 되었네요.<br><br>
                    <img src="@/assets/project_img/project3/webrtc.png" alt="p2pImg" width="45%"><br><br> 우선 <strong>WebRTC도 Torrent와 블록체인처럼 P2P 기반의 기술</strong>입니다.<br> 그러나 Torrent와 블록체인과는 다른 목적을 가졌습니다.<br><br> Torrent는 파일 공유를 위해,<br> 블록체인은 데이터 저장의 신뢰성과 안정성을
                    위해 개발되었다면<br> WebRTC는 <strong>Web Real-Time Communication</strong>이라는 이름에서 알 수 있듯이<br> 크롬과 같은 웹 브라우저를 통해 <strong>실시간으로 다른 사람들과 소통할 수 있게 해주는 P2P 기술</strong>입니다.<br><br> 여기에서 "소통"이란 1:1, 1:N, N:N으로 음성 및 영상 통화를 하거나 파일을 공유하는 것을 의미합니다.<br><br><br>                혹시 Zoom과 Google Meet를 사용해보셨나요?<br> Zoom으로 화상회의를 하기 위해서는 프로그램을 새롭게 설치해야 했지만<br> Google Meet에서는 별도의 설치 없이 웹 브라우저에서 바로 화상 회의가 가능하지 않던가요?<br><br>
                    <img src="@/assets/project_img/project3/google-meet.png" alt="p2pImg" width="70%"><br><br> 여러분이 경험한 것이 맞습니다.<br>
                    <strong>Google Meet는 WebRTC로 구현된 대표적인 서비스</strong>이기 때문에<br> 별도의 프로그램을 설치하지 않아도 웹 브라우저에서 화상 회의가 가능했던 것입니다.<br><br><br>
    
                </p>
                <hr>
    
                <br /><br />
                <h2>WebRTC는 누가 만들었나요?</h2><br>
                <p>
                    Google Meet가 WebRTC로 구현된 대표적인 서비스라는 점에서 눈치 채신 분도 계실 텐데요,<br> WebRTC는 현재 Google의 소유입니다.<br><br> 그러나 해당 기술을 개발한 개발자들은 GIPS라는 회사 소속이었습니다.<br><br> 2010년, Google이 GIPS를 인수하게 되면서 해당 기술에<br> "WebRTC"라는 이름을 붙였고 오픈 소스로 공개했습니다.<br><br> 소스 코드는 아래의
                    WebRTC 깃허브에서 확인할 수 있습니다.
                </p>
                <a href="https://github.com/webrtc" target="_blank"><img src="@/assets/github_logo.png" alt="github_logo" id="githubImg"></a>
                <br><br><br><br>
                <hr>
                <br /><br />
                <h2>Google이 WebRTC를 산 이유?</h2><br>
                <p>
                    P2P 기술은 중앙 서버가 존재하지 않는 통신 방식이기 때문에<br> 중앙 서버를 두고 서비스를 제공하는 일반적인 IT회사들에게는 돈벌이 수단으로 적합하지 않습니다.<br><br> 그렇다면 Google이 자선단체도 아니고<br> 왜 기껏 돈 주고 WebRTC를 사들인 것일까요?<br><br> 구글은 Chrome 위에서 모든 것이 가능하도록 Chrome 생태계를 구축하고 싶어합니다.<br> 구글은 모든 것이 웹 브라우저에서
                    가능하게 되어서<br> 전통적으로는 운영체제에서 하던 일들을 크롬의 영역으로 가져오기를 원합니다.<br> 그런 뒤 크롬 위에서 마음껏 그들의 비즈니스를 펼치고 싶어합니다. <br>
    
                </p>
                <br><br><br>
                <hr>
                <br /><br />
                <h2>WebRTC의 동작 원리</h2>
                <p>
                    오늘날 대부분의 peer들은 원하지 않는 트래픽으로부터 보호되기 위해서<br> 인터넷과 peer 사이에 방화벽을 설정해둡니다. <br> 또한, Public IP 부족으로 인해 인터넷 상에서 고유한 주소를 가지기 위해서<br> 네트워크 주소를 변환해주는 NAT 뒤에 위치해 있습니다. <br><br> 이러한 점들이 피어와 피어 간의 연결을 어렵게 하지만 <br> WebRTC는 다음의 과정을 통해 피어와 피어 사이를 연결합니다.
                    <br><br>
    
                    <strong>상황 : peer A와 peer B가 WebRTC를 통해 통신하고 싶어합니다. <br><br></strong> 1. peer A는 자신이 인터넷과 연결될 수 있는 길을 찾습니다. <br> 2. peer B도 자신이 인터넷과 연결될 수 있는 길을 찾습니다. <br> 3. peer A와 B는 Signaling 서버에 자신이 인터넷과 연결될 수 있는 방법들과<br> 자신의 디바이스에서 지원하는 미디어 정보를
                    보내고 peer A와 B는 이 정보들을 서로 교환합니다. <br> 4. 최적의 경로를 찾아 서로를 연결합니다. <br> 5. peer A와 B가 데이터를 주고 받습니다.
                </p>
            </div>
        </div>
        <br><br>
        <hr>
        <br><br>
        <div class="process">
            <div class="text">
                <h2>자, 이제 WebRTC로 화상 회의를 구현해봅시다!</h2>
                <button id="sendOfferButton" @click="createAndSendOffer">Call</button>
                <button id="answerButton" @click="createAndSendAnswer">Answer</button>
                <button id="hangUpButton" @click="disconnectRTCPeerConnection">Hang Up</button><br /><br />
    
                <input id="messageInput" type="text" size="80" placeholder="Enter message to send">
                <button id="sendMessageButton" @click="sendMessage">Send Message</button><br /><br />
    
                <p style="text-align: center">Tap to Change Front/Back Camera</p>
    
                <div id="videoContainer">
                    <video id="localVideo" @click="switchMobileCamera" muted autoplay playsinline></video>
                    <video id="remoteVideo" autoplay playsinline></video>
                </div>
    
                <table style="width:100%">
                    <tr>
                        <th>Outbound Video Stats</th>
                        <th>Inbound Video Stats</th>
                    </tr>
                    <tr>
                        <td>
                            <div readonly id="outBoundstats"></div>
                        </td>
                        <td>
                            <div readonly id="inBoundstats"></div>
                        </td>
                    </tr>
                </table>
                <br /><br />
                <textarea readonly id="chatTextArea"></textarea><br /><br />
                <textarea readonly id="logs"></textarea><br /><br />
    
            </div>
        </div>
    </div>
</template>

<script setup>
const webSocketConnection = "wss://s83my5gjh1.execute-api.us-west-2.amazonaws.com/websocket";
const turnServerIPAddress = "34.212.91.35";
const turnServerPort = "3478";
const turnServerUserName = "yonding";
const turnServerPassword = "Rlarkdud5762!";

let cameraMode = "user";
let inBoundTimestampPrev = 0;
let inBoundBytesPrev = 0;
let outBoundTimestampPrev = 0;
let outBoundBytesPrev = 0;

let existingTracks = [];

let socket, localStream, connection, clientId = uuidv4(),
    channel;

const configuration = {
    iceServers: [{
            urls: 'stun:' + turnServerIPAddress + ':' + turnServerPort
        },
        {
            urls: 'turn:' + turnServerIPAddress + ':' + turnServerPort,
            username: turnServerUserName,
            credential: turnServerPassword
        }
    ]
}

disableAllButtons();

getLocalWebCamFeed();


/*
    This function creates the socket connection and WebRTC connection. 
    This is also responsible for changing media tracks when user switches mobile cameras (Front and back)
*/
function initiatSocketAndPeerConnection(stream) {
    document.getElementById("localVideo").srcObject = stream;

    if (typeof socket === 'undefined') {
        connectToWebSocket();
    } else {
        stream.getTracks().forEach(function(track, index) {
            connection.getSenders().find(function(s) {
                if (s.track.kind == track.kind) {
                    s.replaceTrack(track);
                }
            });
        });
    }
}

function disableAllButtons() {
    document.getElementById("sendOfferButton").disabled = true;
    document.getElementById("answerButton").disabled = true;
    document.getElementById("sendMessageButton").disabled = true;
    document.getElementById("hangUpButton").disabled = true;
}

/*
    Send messages via Data Channel
*/
function sendMessage() {
    var messageText = document.getElementById("messageInput").value;

    channel.send(JSON.stringify({
        "message": messageText
    }));

    document.getElementById("chatTextArea").value += messageText + '\n';
}

function disconnectRTCPeerConnection() {
    connection.close();
}

/*
    Connect to the web socket and handle recieved messages from web sockets
*/
function connectToWebSocket() {
    socket = new WebSocket(webSocketConnection);

    // Create WebRTC connection only if the socket connection is successful.
    socket.onopen = function(event) {
        log('WebSocket Connection Open.');
        createRTCPeerConnection();
    };

    // Handle messages recieved in socket
    socket.onmessage = function(event) {
        jsonData = JSON.parse(event.data);

        switch (jsonData.type) {
            case 'candidate':
                handleCandidate(jsonData.data, jsonData.id);
                break;
            case 'offer':
                handleOffer(jsonData.data, jsonData.id);
                break;
            case 'answer':
                handleAnswer(jsonData.data, jsonData.id);
                break;
            default:
                break
        }
    };

    socket.onerror = function(event) {
        console.error(event);
        log('WebSocket Connection Error. Make sure web socket URL is correct and web socket server is up and running at - ' +
            webSocketConnection);
    };

    socket.onclose = function(event) {
        log('WebSocket Connection Closed. Please Reload the page.');
        document.getElementById("sendOfferButton").disabled = true;
        document.getElementById("answerButton").disabled = true;
    };
}

function log(message) {
    document.getElementById("logs").value += message + '\n';
}

/*
    Get local camera permission from user and initiate socket and WebRTC connection
*/
function getLocalWebCamFeed() {

    // width: { ideal: 4096 },
    // height: { ideal: 2160 } 

    constraints = {
        audio: true,
        video: {
            facingMode: cameraMode
            // width: { ideal: 1280 },
            // height: { ideal: 720 }
        }
    }

    navigator.getWebcam = (navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.moxGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function(stream) {
                localStream = stream;
                initiatSocketAndPeerConnection(stream);
            })
            .catch(function(e) {
                log(e.name + ": " + e.message);
            });
    } else {
        navigator.getWebcam({
                audio: true,
                video: true
            },
            function(stream) {
                localStream = stream;
                initiatSocketAndPeerConnection(stream);
            },
            function() {
                log("Web cam is not accessible.");
            });
    }
}

/*
    This is responsible for creating an RTCPeerConnection and handle it's events.
*/
function createRTCPeerConnection() {
    pushStats();
    connection = new RTCPeerConnection(configuration);

    // Add both video and audio tracks to the connection
    for (const track of localStream.getTracks()) {
        log("Sending Stream.")
        existingTracks.push(connection.addTrack(track, localStream));
    }

    // This event handles displaying remote video and audio feed from the other peer
    connection.ontrack = event => {
        log("Recieved Stream.");
        document.getElementById("remoteVideo").srcObject = event.streams[0];
    }

    // This event handles the received data channel from the other peer
    connection.ondatachannel = function(event) {
        log("Recieved a DataChannel.")
        channel = event.channel;
        setChannelEvents(channel);
        document.getElementById("sendMessageButton").disabled = false;
    };

    // This event sends the ice candidates generated from Stun or Turn server to the Receiver over web socket
    connection.onicecandidate = event => {
        if (event.candidate) {
            log("Sending Ice Candidate - " + event.candidate.candidate);

            socket.send(JSON.stringify({
                action: 'onMessage',
                type: 'candidate',
                data: event.candidate,
                id: clientId
            }));
        }
    }

    // This event logs messages and handles button state according to WebRTC connection state changes
    connection.onconnectionstatechange = function(event) {
        switch (connection.connectionState) {
            case "connected":
                log("Web RTC Peer Connection Connected.");
                document.getElementById("answerButton").disabled = true;
                document.getElementById("sendOfferButton").disabled = true;
                document.getElementById("hangUpButton").disabled = false;
                document.getElementById("sendMessageButton").disabled = false;
                break;
            case "disconnected":
                log("Web RTC Peer Connection Disconnected. Please reload the page to reconnect.");
                disableAllButtons();
                break;
            case "failed":
                log("Web RTC Peer Connection Failed. Please reload the page to reconnect.");
                console.log(event);
                disableAllButtons();
                break;
            case "closed":
                log("Web RTC Peer Connection Failed. Please reload the page to reconnect.");
                disableAllButtons();
                break;
            default:
                break;
        }
    }

    log("Web RTC Peer Connection Created.");
    document.getElementById("sendOfferButton").disabled = false;
}

/*
    Creates and sends the Offer to the Receiver
    Creates a Data channel for exchanging text messages
    This function is invoked by the Caller
*/
function createAndSendOffer() {
    if (channel) {
        channel.close();
    }

    // Create Data channel
    channel = connection.createDataChannel('channel', {});
    setChannelEvents(channel);

    // Create Offer
    connection.createOffer().then(
        offer => {
            log('Sent The Offer.');

            // Send Offer to other peer
            socket.send(JSON.stringify({
                action: 'onMessage',
                type: 'offer',
                data: offer,
                id: clientId
            }));

            // Set Offer for negotiation
            connection.setLocalDescription(offer);
        },
        error => {
            log('Error when creating an offer.');
            console.error(error);
        }
    );
}

/*
    Creates and sends the Answer to the Caller
    This function is invoked by the Receiver
*/
function createAndSendAnswer() {

    // Create Answer
    connection.createAnswer().then(
        answer => {
            log('Sent The Answer.');

            // Set Answer for negotiation
            connection.setLocalDescription(answer);

            // Send Answer to other peer
            socket.send(JSON.stringify({
                action: 'onMessage',
                type: 'answer',
                data: answer,
                id: clientId
            }));
        },
        error => {
            log('Error when creating an answer.');
            console.error(error);
        }
    );
}

/*
    Accepts ICE candidates received from the Caller
*/
function handleCandidate(candidate, id) {

    // Avoid accepting the ice candidate if this is a message created by the current peer
    if (clientId != id) {
        log("Adding Ice Candidate - " + candidate.candidate);
        connection.addIceCandidate(new RTCIceCandidate(candidate));
    }
}

/*
    Accepts Offer received from the Caller
*/
function handleOffer(offer, id) {

    // Avoid accepting the Offer if this is a message created by the current peer
    if (clientId != id) {
        log("Recieved The Offer.");
        connection.setRemoteDescription(new RTCSessionDescription(offer));
        document.getElementById("answerButton").disabled = false;
        document.getElementById("sendOfferButton").disabled = true;
    }
}

/*
    Accetps Answer received from the Receiver
*/
function handleAnswer(answer, id) {

    // Avoid accepting the Answer if this is a message created by the current peer
    if (clientId != id) {
        log("Recieved The Answer");
        connection.setRemoteDescription(new RTCSessionDescription(answer));
    }
}

/*
    Generate a unique ID for the peer
*/
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/*
    Handle Data Channel events
*/
function setChannelEvents(channel) {
    channel.onmessage = function(event) {
        var data = JSON.parse(event.data);
        document.getElementById("chatTextArea").value += data.message + '\n';
    };

    channel.onerror = function(event) {
        log('DataChannel Error.');
        console.error(event)
    };

    channel.onclose = function(event) {
        log('DataChannel Closed.');
        disableAllButtons();
    };
}

/*
    Switch between front and back camera when opened in a mobile browser
*/
function switchMobileCamera() {
    if (cameraMode == "user") {
        cameraMode = "environment";
    } else {
        cameraMode = "user";
    }

    getLocalWebCamFeed();
}

function pushStats() {
    let inBoundStatsDiv = document.getElementById("inBoundstats");
    let outBoundstatsDiv = document.getElementById("outBoundstats");

    window.setInterval(function() {
        connection.getStats(null).then(stats => {
            let inBoundBitrate;
            let outBoundBitrate;

            stats.forEach(report => {
                if (report.type === 'inbound-rtp' && report.mediaType === 'video') {
                    let now = report.timestamp;
                    let bytes = report.bytesReceived;
                    if (inBoundTimestampPrev) {
                        inBoundBitrate = 0.125 * (8 * (bytes - inBoundBytesPrev) / (now -
                            inBoundTimestampPrev));
                        inBoundBitrate = Math.floor(inBoundBitrate);
                    }
                    inBoundBytesPrev = bytes;
                    inBoundTimestampPrev = now;
                } else if (report.type === 'outbound-rtp' && report.mediaType === 'video') {
                    let now = report.timestamp;
                    let bytes = report.bytesSent;
                    if (outBoundTimestampPrev) {
                        outBoundBitrate = 0.125 * (8 * (bytes - outBoundBytesPrev) / (now -
                            outBoundTimestampPrev));
                        outBoundBitrate = Math.floor(outBoundBitrate);
                    }
                    outBoundBytesPrev = bytes;
                    outBoundTimestampPrev = now;
                }

                if (isNaN(inBoundBitrate)) {
                    inBoundBitrate = 0;
                }

                if (isNaN(outBoundBitrate)) {
                    outBoundBitrate = 0;
                }

                let inboundVideoWidth = document.getElementById("remoteVideo").videoWidth;
                let inboundVideoHeight = document.getElementById("remoteVideo").videoHeight;
                inBoundStatsDiv.innerHTML =
                    `<strong>Bitrate: </strong>${inBoundBitrate} KB/sec<br/><strong>Video dimensions: </strong> ${inboundVideoWidth}x${inboundVideoHeight}px<br/>`;

                let outboundVideoWidth = document.getElementById("localVideo").videoWidth;
                let outboundVideoHeight = document.getElementById("localVideo").videoHeight;
                outBoundstatsDiv.innerHTML =
                    `<strong>Bitrate: </strong>${outBoundBitrate} KB/sec<br/><strong>Video dimensions: </strong> ${outboundVideoWidth}x${outboundVideoHeight}px<br/>`;
            });

        });
    }, 1000);
}
</script>

<style scoped>
.p3-container {
    padding: 30px;
}

button {
    margin: 20px;
}

.introduction {
    margin: 30px 20px;
    padding: 10px;
    transition: all 0.5s ease-in-out;
}

h1,
h2,
h3 {
    font-weight: 400;
    line-height: 2em;
    margin: 20px;
}

h3 {
    font-size: 25px;
}

h4,
h5,
p {
    font-weight: 200;
    margin: 20px;
    line-height: 2em;
}

p {
    font-size: 20px;
}

#webrtcImg {
    width: 78%;
}

.text {
    margin: auto;
    width: 90%;
}

#githubImg {
    padding: 10px;
    width: 70px;
}

#githubImg:hover {
    opacity: 80%;
    transition: all 0.3s;
}

/* video */

#videoContainer {
    display: table;
    margin: 0 auto;
}

video {
    margin: 10px;
    border: 2px solid #000000;
}

textarea {
    width: 100%;
    height: 150px;
    resize: none;
    box-sizing: border-box;
}

.center {
    margin: auto;
    width: 70%;
    border: 3px solid green;
    padding: 20px;
}

input,
button {
    width: 100%;
    box-sizing: border-box;
}

video {
    width: 40%;
    height: 100%;
}

button {
    border: 1px solid #000000;
    background-color: #0099ff;
    color: #ffffff;
    padding: 5px 10px;
}

button:disabled,
button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
}

th,
td {
    text-align: center;
}
</style>