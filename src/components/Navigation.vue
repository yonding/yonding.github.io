<template>
    <div class="navigation-container" style="position:fixed; bottom:30px; right:35px">
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
}

button {
    opacity: 0.5;
    margin: 3px;
    height: 80px;
    width: 80px;
    border: solid 1.5px rgb(131, 131, 131);
    border-radius: 40px;
    transition: all 0.3s;
}

button:hover {
    background-color: lightgray;
    border: solid 1.8px rgb(91, 91, 91);
    border-radius: 30px;
    transition: all 0.3s;
}

@media (max-width: 768px) {
    .navigation-container{
        width: 70px;
        position: absolute;
        top: 73%;
        left: 85%;
    }
    button {
        margin: 2px;
        height: 50px;
        width: 50px;
        font-size: 12px;
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
}
</style>
