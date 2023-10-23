<template>
    <div class="p3-container container text-center">
        <Navigation />
        <br>
        <img id="webrtcImg" src="@/assets/card_img/card_img_2.png" alt="webrtc" /><br><br>
        <br>
        <p>
        </p>
        <p id="intro"></p>
        <hr>
        <br>
        <div class="introduction">
            
        </div>
        <div>
        <h2>효율적인 질의 페더레이션을 위한 Apache Calcite 어댑터 아키텍처</h2>
        <h3>김가영˚ 김윤지 최원준 최은지 이영구<br>
            (경희대학교 컴퓨터공학과)</h3>
        <embed src="https://yonding.s3.ap-northeast-2.amazonaws.com/Apache+Calcite+Adapter+Architecture+for+Efficient+Query+Federation.pdf" type="application/pdf" width="100%" height="800px" />
        
    </div>
    </div>
    </template>
    
        
        
    <script>
    import Navigation from "@/components/Navigation.vue";
    
    export default {
        components: {
            Navigation
        }
    }
    </script>
        
        
    <style scoped>
    
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
    
    </style>
    