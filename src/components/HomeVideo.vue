<template>
    <video oncontextmenu="return false;" id="homeVideo" width="640" muted autoplay loop>
        <source src="../assets/home_video.mp4" type="video/mp4">
    </video>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homeVideo {
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

</style>
