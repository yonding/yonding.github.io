<template>
    <div class="p3-container container text-center">
        <Navigation />
        <br>
        <img id="webrtcImg" src="@/assets/card_img/card_img_3.png" alt="webRTC" />
        <br>
        <h2>Peer To Peer</h2>
        <br>
        <p id="intro"></p>
        <hr>
        <br>
        <div class="introduction">
            <div><h1 class="subtitle">INTRODUCTION</h1></div>
            <br><br><br>
            <div class="text">
                <h2>P2P가 무엇인가요?</h2>
                <p>
                    <br>
                    <img src="@/assets/project_img/project3/server-client.jpeg" alt="serverClientImg" width="50%"><br><br> 서버가 존재하는 <strong>클라이언트-서버 모델</strong>에서는<br> "client2와 client3에게 '안녕'이라고 전해줄래?"라는 client1의 요청이 중앙 서버로 전송되면<br> 서버가 client1의 요청대로 client2와
                    client3에게
                    <br> "client1이 너네한테 '안녕'이래!"라고 전해주는 방식으로 동작합니다.<br><br> 우리가 자주 사용하는 카카오톡과 인스타그램은<br> 서버가 존재하는 클라이언트-서버 모델을 기반으로 운영됩니다.
                    <br><br><br> 반면에 <strong>P2P</strong>는 Peer-to-Peer의 약어로 <br> 중앙 서버 없이 개별 컴퓨터들 간에 직접적으로 데이터를 주고받는 통신 방식을 의미합니다.<br><br>
                    <img src="@/assets/project_img/project3/p2p.jpeg" alt="p2pImg" width="60%"><br> client1이 client2와 client3에게 "안녕"이라고 전하기 위해서<br> 클라이언트-서버 시스템에서는 서버에게 한 번의 요청을 보내면 되었지만<br> P2P 시스템에서는 client1이 직접 client2와 client3에게 "안녕"이라는 컨텐츠를 두 번 전송해야
                    합니다.
                    <br> (만약 채팅방에 10명이 있었다면 자신을 제외한 9명의 클라이언트에게 아홉 번의 전송을 해야 합니다.)<br><br> 이 방식에서는 peer to peer 로 직접 데이터를 주고받기 때문에<br> 서버 자원을 아낄 수 있다는 장점이 있지만<br> 클라이언트는 서버가 해주던 일(데이터를 대신 전해주는 일)을 직접 해야 합니다.<br><br> Torrent는 중앙 서버 없이 클라이언트들이 서로 파일을 공유하기 위해 개발된 P2P
                    기술 중 하나입니다.<br> Torrent를 사용해 본 사람들은 "시드 유지 부탁드립니다."라는 말을 들어봤을 텐데,<br> 이 말은 "누군가 서버 역할을 자처해서 너에게 파일을 공유해줬으니<br> 다운로드를 완료한 후부터는 네가 서버의 역할을 자처해줘."라는 뜻입니다.
                </p>
                <br>
                <br><br>
                <hr>
                <br><br>
                <h2>WebRTC는 무엇인가요?</h2><br>
                <p>
                    <img src="@/assets/project_img/project3/webrtc.png" alt="p2pImg" width="45%"><br><br> <strong>WebRTC도 Torrent와 같이 P2P 기반의 기술</strong> 중 하나입니다.<br> 그러나 Torrent와는 다른 목적을 가졌습니다.<br><br> 
                    Torrent는 파일 공유를 위해 개발되었지만<br> 
                    WebRTC는 <strong>Web Real-Time Communication</strong>이라는 이름에서 알 수 있듯이<br> 크롬과 같은 웹 브라우저를 통해 <strong>실시간으로 다른 사람들과 소통할 수 있게 해주는 P2P 기술</strong>입니다.<br><br> 
                    여기에서 "소통"이란 1:1, 1:N, N:N으로 음성 및 영상 통화를 하거나 파일을 공유하는 것을 의미합니다.<br><br>
                    혹시 Zoom과 Google Meet를 사용해보셨나요?<br> Zoom으로 화상회의를 하기 위해서는 프로그램을 새롭게 설치해야 했지만<br> Google Meet에서는 별도의 설치 없이 웹 브라우저에서 바로 화상 회의가 가능하지 않던가요?<br><br>
                    <img src="@/assets/project_img/project3/google-meet.png" alt="p2pImg" width="70%"><br><br> 여러분이 경험한 것이 맞습니다.<br>
                    <strong>Google Meet는 WebRTC로 구현된 대표적인 서비스</strong>이기 때문에<br> 별도의 프로그램을 설치하지 않아도 웹 브라우저에서 화상 회의가 가능했던 것입니다.<br><br><br>
    
                </p>
                <hr>
    
                <br><br>
                <h2>WebRTC는 누가 만들었나요?</h2><br>
                <p>
                    Google Meet가 WebRTC로 구현된 대표적인 서비스라는 점에서 눈치 채신 분도 계실 텐데요,<br> WebRTC는 현재 Google의 소유입니다.<br><br> 그러나 해당 기술을 개발한 개발자들은 GIPS라는 회사 소속이었습니다.<br><br> 2010년, Google이 GIPS를 인수하게 되면서 해당 기술에<br> 
                    "WebRTC"라는 이름을 붙였고 오픈 소스로 공개했습니다.<br><br> 
                    WebRTC의 소스 코드는 아래의 WebRTC 깃허브에서 확인할 수 있습니다.
                </p>
                <a href="https://github.com/webrtc" target="_blank"><img src="@/assets/github_logo.png" alt="github_logo" id="githubImg"></a>
                <br><br><br><br>
                <hr>
                <br><br>
                <h2>WebRTC의 동작 원리</h2>
                <p>
                    오늘날 대부분의 peer들은 원하지 않는 트래픽으로부터 보호되기 위해서<br> 
                    인터넷과 peer 사이에 방화벽을 설정해둡니다. <br> 
                    또한, Public IP 부족으로 인해 인터넷 상에서 고유한 주소를 가지기 위해서<br>
                    네트워크 주소를 변환해주는 NAT 뒤에 위치해 있습니다. <br><br>
                    이러한 점들이 피어와 피어 간의 연결을 어렵게 하지만 <br> WebRTC는 다음의 과정을 통해 피어와 피어 사이를 연결합니다.
                    <br><br>
                    
                    <strong>상황 : peer A와 peer B가 WebRTC를 통해 통신하고 싶어합니다. <br><br></strong> 1. peer A는 자신이 인터넷과 연결될 수 있는 길을 찾습니다. <br> 2. peer B도 자신이 인터넷과 연결될 수 있는 길을 찾습니다. <br> 3. peer A와 B는 Signaling 서버에 자신이 인터넷과 연결될 수 있는 방법들과<br> 
                    자신의 디바이스에서 지원하는 미디어 정보를 보내고 시그널링 서버를 통해 이 정보들을 서로 교환합니다. <br>
                    4. 최적의 경로를 찾아 서로를 연결합니다. <br> 5. peer A와 B가 데이터를 주고 받습니다.
                </p>
            </div>
            <br><br>
            <hr>
        </div>
        <p id="projectArchitecture"></p>
        <br>        
        <div class="architecture">
            <div><h1 class="subtitle">PROJECT ARCHITECTURE</h1></div>
            <br><br>
            <div></div>
            <p>
                <strong style="font-size: 25px;">목표</strong><br> <br>
                WebRTC를 사용해 일대일 화상 채팅 서비스 구현하기<br><br><br>
                <strong style="font-size: 25px;">구성요소 및 배포</strong><br><br>
                <strong>1. Client Application</strong> <br>
                현재 페이지의 "TRY NOW"에 구현 - Vue.js<br><br>
                <strong>2. Signaling Server</strong> <br>
                직접 서버 프로그램 작성 - Spring Boot, WebSockets<br>
                작성한 코드는 아래의 깃허브 레포지토리에서 확인 가능합니다. <br>
                <a href="https://github.com/yonding/signaling-server" target="_blank"><img src="@/assets/github_logo.png" alt="github_logo" id="githubImg"></a>
                <br><br>
                <strong>3. STUN Server</strong> <br>
                Google STUN Server 사용<br><br>
                <strong>[ Project Deployment ]</strong> <br>
                Client App -  현재 페이지 (GitHub Pages) <br>
                Signaling Server - AWS EC2 (Docker 컨테이너), AWS ALB<br>
                STUN Server - Google 서버에 연결<br>
                
                <br>
                <br>
                
                
                <strong style="font-size: 25px;">구성요소 간의 상호작용 (그림)</strong><br> 
                <br>
                <br>
                
            </p>
        </div>
        <br><br>
        <hr>
        <p id="tryNow"></p>
        <br><br>
        <div class="try">
            <div><h1 class="subtitle">TRY NOW</h1></div>
            <br>
            <p> 
                <strong style="font-size: 25px;">일대일 화상채팅 사용법</strong><br>
            </p>
            <VideoChat />
            <p style="text-align: left; width: 500px; margin:0px auto">
                <strong>※ 새로운 방을 생성하고 싶다면?</strong> <br>
                1. "NEW ROOM"을 클릭하고 채팅방의 이름과 비밀번호를 <br>
                &nbsp; &nbsp; 설정한다. <br>
                2. 채팅방 이름과 비밀번호를 상대방에게 알려준다. <br>
                3. 상대방이 채팅에 참여할 때까지 기다린다. <br> 
                - 방 이름이 이미 존재할 시에는 채팅방을 생성할 수 없습니다. <br> <br>
                <strong>※ 상대방이 만든 방에 참여하고 싶다면?</strong> <br>
                1. "JOIN ROOM"을 클릭하고 상대방이 알려준 채팅방 이름과<br>
                &nbsp; &nbsp;비밀번호를 입력한다. <br>
                2. 채팅에 참여한다. <br>
                - 방이 존재하지 않거나 채팅방 정보가 틀렸거나 정원 초과일<br>
                &nbsp; 시에는 채팅에 참여할 수 없습니다.
            </p>
        </div>
        <br><br>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import VideoChat from "@/components/VideoChat.vue";
export default {
    components: {
        Navigation,
        VideoChat
    }
}
</script>

<style scoped>
.p3-container {
    padding: 30px;
}
.subtitle{
    background-color: rgb(231, 231, 231);
    border: solid 1px lightgray;
}

#projectArchitectureImg {
    width: 50%;
}

#tryNowImg {
    width: 29%;
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
</style>
