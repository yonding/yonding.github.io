<template>
<div class="p3-container container text-center">
    <Navigation />
    <br>
    <img id="bentobenImg" src="@/assets/card_img/card_img_1.png" alt="bentoben" /><br><br>
    <div>
        <p>
            2023 KVP(KHU Valley Program)에 참가하여<br>
            창업을 준비하는 과정을 간접적으로 경험해보았다.
        </p>
    </div>
    <br>
    <p>
    </p>
    <p id="intro"></p>
    <hr>
    <br>
    <div class="introduction">
        <h2>비즈니스 모델 캔버스 (린 캔버스)</h2>
        <img id="leanCanvasImg" src="@/assets/project_img/project1/lean_canvas.png" alt="">
    </div>
        <hr>
    <div>
        <h2>사업계획서 작성</h2>
        <embed src="https://yonding.s3.ap-northeast-2.amazonaws.com/bentoben_business_plan.pdf" type="application/pdf" width="100%" height="800px" />
        
    </div>
        <hr>
    <div>
        <h2>Pitch Deck</h2>
        <embed src="https://yonding.s3.ap-northeast-2.amazonaws.com/bentoben_deck.pdf" type="application/pdf" width="100%" height="800px" />
    </div>
</div>
</template>

    
    
<script>

export default {
    components: {
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

#bentobenImg {
    width: 78%;
}

#leanCanvasImg{
    width:90%
}

.text {
    margin: auto;
    width: 90%;
}

</style>
