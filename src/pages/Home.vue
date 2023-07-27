<template>
    <div class="home-container">
        <HomeVideo id="homeVideo" class="align-self-center"></HomeVideo>
        <Menu id="menu"></Menu>
    </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import HomeVideo from "../components/HomeVideo.vue";

export default {
    name: "Home",
    components: { Menu, HomeVideo },
};
</script>

<style>
.home-container {
    height: 100%;
    width: 100%;
    position: fixed;
    margin: 0;
    padding: 0;
}
</style>

<style scoped>
#menu {
    position: absolute;
    top: 49%;
    width: 100%;
}

@media screen and (max-width: 700px) {
    #menu {
        top: 15%;
    }
}
</style>
