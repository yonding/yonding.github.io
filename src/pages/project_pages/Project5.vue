<template>
<div class="p3-container container text-center">
    <Navigation />
    <br>
    <img id="moldooImg" src="@/assets/card_img/card_img_5.png" alt="mulmagi" /><br><br>
    <br>
    <p>
    </p>
    <p id="intro"></p>
    <hr>
    <br>
    <div class="introduction">
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

#moldooImg {
    width: 78%;
}

.text {
    margin: auto;
    width: 90%;
}

</style>
