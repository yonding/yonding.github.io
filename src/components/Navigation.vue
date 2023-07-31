<template>
<div class="navigation-container" style="position:fixed; bottom:30px; right:35px">
    <img @click="scrollToSection('top')" src="@/assets/button_img/top.png" alt="introBtn" id="introBtn">
    <img @click="scrollToSection('intro')" src="@/assets/button_img/intro.png" alt="introBtn" id="introBtn">
    <img @click="scrollToSection('projectArchitecture')" src="@/assets/button_img/project_arch.png" alt="projectArchBtn" id="projectArchBtn">
    <img @click="scrollToSection('tryNow')" src="@/assets/button_img/try_now.png" alt="tryNowBtn" id="tryNowBtn">
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

img {
    margin: 3px;
    width: 80px;
    border-radius: 40px;
    transition: all 0.3s;
}
img:hover{
    opacity: 0.8;
    border-radius: 50px;
    transition: all 0.3s;

}
</style>
