<template>
    <div class="navigation-container" >
        <button @click="scrollToSection('top')" alt="introBtn" id="introBtn">TOP</button>
        <button @click="scrollToSection('intro')" alt="introBtn" id="introBtn">INTRO</button>
        <button @click="scrollToSection('projectArchitecture')" alt="projectArchBtn" id="projectArchBtn">ARCH</button>
        <button @click="scrollToSection('tryNow')" alt="tryNowBtn" id="tryNowBtn">TRY</button>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        },
    },
};
</script>

<style scoped>
.navigation-container {
    width: 100px;
    position: fixed;
    bottom: 30px;
    right: 40px;
}

button {
    opacity: 0.7;
    margin: 5px;
    height: 80px;
    width: 80px;
    border: solid 1.5px rgb(131, 131, 131);
    border-radius: 40px;
    transition: all 0.3s;
}

button:hover {
    background-color: lightgray;
    border: solid 1.8px rgb(91, 91, 91);
    border-radius: 20px;
    transition: all 0.3s;
}

@media (max-width: 768px) {
    .navigation-container{
        display: inline;
        width: 65px;
        position: absolute;
        position:fixed; bottom:10px; right:10px;
        height: auto;
    }
    button {
        margin: 3px;
        height: 60px;
        width: 60px;
        font-size: 11px;
        font-weight: 800;
        color:rgb(30, 30, 30);
        border: solid 1.2px rgb(30, 30, 30);
        border-radius: 40px;
        transition: all 0.3s;
    }
    button:hover {
        background-color: lightgray;
        border: solid 1.8px rgb(91, 91, 91);
        border-radius: 20px;
        transition: all 0.3s;
    }
}
</style>
