<template>
<div class="p3-container container text-center">
    <Navigation/>
    <br>
    <img id="webrtcImg" src="@/assets/card_img/card_img_3.png" alt="webRTC" />
    <br><br><br>
    <h2>Peer To Peer</h2>
    <p>
        WebRTC 로고를 구성하는 다섯 가지의 색상으로 이루어진 배경.<br> 마주 본 두 얼굴은 중앙 서버를 거치지 않고 직접 소통하는 P2P 통신 방식을 표현했다.<br><br> 특히, 두 얼굴 사이에 존재하는 희미한 "WEB RTC"라는 글자들은<br> 두 사람의 실시간 소통이 WebRTC라는 구체적인 기술을 통해 가능함을 나타낸다.
        <br><br><br>
    </p>
    <p id="intro"></p>
    <hr>
    <br>
    <div class="introduction">
        <img src="@/assets/subtitle_img/introduction.png" alt="introductionImg" id="introductionImg" class="subtitle">
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
                <br> (만약 채팅방에 10명이 있었다면 10명의 클라이언트에게 열 번의 전송을 해야 합니다.)<br><br> 이 방식에서는 peer to peer 로 직접 데이터를 주고받기 때문에<br> 서버 자원을 아낄 수 있다는 장점이 있지만<br> 클라이언트는 서버가 해주던 일(데이터를 대신 전해주는 일)을 직접 해야 합니다.<br><br> Torrent는 서버 없이도 클라이언트들이 서로 파일을 공유하기 위해 개발된 P2P
                기술 중 하나입니다.<br> Torrent를 사용해 본 사람들은 "시드 유지 부탁드립니다."라는 말을 들어봤을 텐데,<br> 이 말은 "누군가 서버 역할을 자처해서 너에게 파일을 공유해줬으니<br> 다운로드를 완료한 후부터는 네가 서버의 역할을 자처해줘."라는 뜻입니다.
            </p>
            <br><br>
            <hr>
            <br><br>
            <h2>P2P와 블록체인</h2>
            <br>
            <p>
                클라이언트-서버 모델과 P2P에 대해 위에서 설명했는데,<br> 요즘 핫한 <strong>블록체인이 P2P 기반</strong>의 기술인 것을 아시나요?<br><br><br>

                <img src="@/assets/project_img/project3/bank.jpeg" alt="p2pImg" width="70%"><br> 우리가 기존에 이용했던 하나은행, 신한은행과 같은 은행들은<br> 각 은행마다 서버를 두고 금융 거래 내역을 은행 서버에 저장해둡니다.<br><br> 물론 은행도 여러 방법으로 보안에 신경쓰고 문제 상황에 대비하겠지만<br> 만약 은행 서버가 털린다면 우리의 통장에 있던 돈은
                전부 사라지겠죠?<br><br> 이런 운영 방식은 클라이언트-서버 모델과 비슷하다고 할 수 있습니다.<br><br><br> 반면에 <strong>블록체인 기술</strong>은 어떤 거래가 발생했을 때 해당 거래에 대한 정보를<br>
                <strong>중앙 서버에 저장하지 않고 여러 컴퓨터에 분산시켜 저장</strong>하도록 합니다.<br>
                <img src="@/assets/project_img/project3/blockchain.jpeg" alt="p2pImg" width="65%"><br> 분산되어 있는 여러 컴퓨터들은 거래 정보를 저장해주고<br> 해당 정보에 오류가 없는지 확인해주는 대신에 이에 대한 보상을 받습니다.<br><br> 거래 정보가 수많은 컴퓨터에 저장되어 있으니<br> 몇몇 컴퓨터의 정보가 사라지거나 변경된다고 해도<br> 다른 여러
                컴퓨터들과 비교해보면 되니 안전할 것입니다.<br><br> 기존의 은행과 비교해보니 블록체인을 왜 P2P 기반의 기술이라고 하는지 아시겠죠?<br>
            </p>
            <br><br>
            <hr>
            <br><br>
            <h2>그나저나 WebRTC는 무엇인가요?</h2><br>
            <p>
                P2P에 대해서 하고 싶은 말이 많다보니 이제야 WebRTC에 대해 이야기하게 되었네요.<br><br>
                <img src="@/assets/project_img/project3/webrtc.png" alt="p2pImg" width="45%"><br><br> 우선 <strong>WebRTC도 Torrent와 블록체인처럼 P2P 기반의 기술</strong>입니다.<br> 그러나 Torrent와 블록체인과는 다른 목적을 가졌습니다.<br><br> Torrent는 파일 공유를 위해,<br> 블록체인은 데이터 저장의 신뢰성과 안정성을
                위해 개발되었다면<br> WebRTC는 <strong>Web Real-Time Communication</strong>이라는 이름에서 알 수 있듯이<br> 크롬과 같은 웹 브라우저를 통해 <strong>실시간으로 다른 사람들과 소통할 수 있게 해주는 P2P 기술</strong>입니다.<br><br> 여기에서 "소통"이란 1:1, 1:N, N:N으로 음성 및 영상 통화를 하거나 파일을 공유하는 것을 의미합니다.<br><br><br> 혹시 Zoom과 Google Meet를 사용해보셨나요?<br> Zoom으로 화상회의를 하기 위해서는 프로그램을 새롭게 설치해야 했지만<br> Google Meet에서는 별도의 설치 없이 웹 브라우저에서 바로 화상 회의가 가능하지 않던가요?<br><br>
                <img src="@/assets/project_img/project3/google-meet.png" alt="p2pImg" width="70%"><br><br> 여러분이 경험한 것이 맞습니다.<br>
                <strong>Google Meet는 WebRTC로 구현된 대표적인 서비스</strong>이기 때문에<br> 별도의 프로그램을 설치하지 않아도 웹 브라우저에서 화상 회의가 가능했던 것입니다.<br><br><br>

            </p>
            <hr>

            <br><br>
            <h2>WebRTC는 누가 만들었나요?</h2><br>
            <p>
                Google Meet가 WebRTC로 구현된 대표적인 서비스라는 점에서 눈치 채신 분도 계실 텐데요,<br> WebRTC는 현재 Google의 소유입니다.<br><br> 그러나 해당 기술을 개발한 개발자들은 GIPS라는 회사 소속이었습니다.<br><br> 2010년, Google이 GIPS를 인수하게 되면서 해당 기술에<br> "WebRTC"라는 이름을 붙였고 오픈 소스로 공개했습니다.<br><br> 소스 코드는 아래의
                WebRTC 깃허브에서 확인할 수 있습니다.
            </p>
            <a href="https://github.com/webrtc" target="_blank"><img src="@/assets/github_logo.png" alt="github_logo" id="githubImg"></a>
            <br><br><br><br>
            <hr>
            <br><br>
            <h2>Google이 WebRTC를 산 이유?</h2><br>
            <p>
                구글은 Chrome 위에서 모든 것이 가능하도록 Chrome 생태계를 구축하고 싶어합니다.<br> 구글은 모든 것이 웹 브라우저에서
                가능하게 되어서<br> 전통적으로는 운영체제에서 하던 일들을 크롬의 영역으로 가져오기를 원합니다.<br> 그런 뒤 크롬 위에서 마음껏 그들의 비즈니스를 펼치고 싶어합니다. <br><br>
                실제로 제가 초등학생일 때만 해도 Internet Explorer가 대세였습니다. <br>
                하지만 어느새 Chrome이 가장 강력하고 대중적인 웹브라우저가 되어 웹 시장을 장악하고 있습니다. <br>
                <br> 이것이 바로 구글이 원했던 그림이지 않을까요?<br>

            </p>
            <br><br><br>
            <hr>
            <br><br>
            <h2>WebRTC의 동작 원리</h2>
            <p>
                오늘날 대부분의 peer들은 원하지 않는 트래픽으로부터 보호되기 위해서<br> 인터넷과 peer 사이에 방화벽을 설정해둡니다. <br> 또한, Public IP 부족으로 인해 인터넷 상에서 고유한 주소를 가지기 위해서<br> 네트워크 주소를 변환해주는 NAT 뒤에 위치해 있습니다. <br><br> 이러한 점들이 피어와 피어 간의 연결을 어렵게 하지만 <br> WebRTC는 다음의 과정을 통해 피어와 피어 사이를 연결합니다.
                <br><br>

                <strong>상황 : peer A와 peer B가 WebRTC를 통해 통신하고 싶어합니다. <br><br></strong> 1. peer A는 자신이 인터넷과 연결될 수 있는 길을 찾습니다. <br> 2. peer B도 자신이 인터넷과 연결될 수 있는 길을 찾습니다. <br> 3. peer A와 B는 Signaling 서버에 자신이 인터넷과 연결될 수 있는 방법들과<br> 자신의 디바이스에서 지원하는 미디어 정보를
                보내고 peer A와 B는 이 정보들을 서로 교환합니다. <br> 4. 최적의 경로를 찾아 서로를 연결합니다. <br> 5. peer A와 B가 데이터를 주고 받습니다.
            </p>
        </div>
        <br><br>
        <hr>
        <br>
    </div>

    <p id="projectArchitecture"></p>
    <div class="architecture">

        <img src="@/assets/subtitle_img/project_architecture.png" alt="projectArchitectureImg" id="projectArchitectureImg" class="subtitle">

    </div>
    <br><br>
    <hr>
    <p id="tryNow"></p>
    <br><br>
    <div class="try">
        <img src="@/assets/subtitle_img/try_now.png" alt="tryNowImg" id="tryNowImg" class="subtitle">

    </div>
    <br><br>
</div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default{
    components:{
        Navigation
    }
}
</script>

<style scoped>
.p3-container {
    padding: 30px;
}

#introductionImg{
    width: 38%;
}
#projectArchitectureImg {
    width: 50%;
}
#tryNowImg{
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
