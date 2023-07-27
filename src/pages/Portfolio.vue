<template>
    <div class="portfolio-container container text-center">
        <Header title="PORTFOLIO" back_path="/"></Header>
        <Album></Album>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Album from '../components/Album.vue'

export default {
    name: "Portfolio",
    components: { Album, Header }
};
</script>
<style>

.portfolio-container {
    width: 90%;
    height: 90%;
    padding: 30px;
    margin: 60px auto;
    background-color: #fff;
}

</style>

<style scoped>
.profile-header .fa{
    width: 80px;
}
.profile-header {
    position: relative;
}
.back-btn {
    position: absolute;
    top: 50%;
    left: 20px;
    color: #616161;
    transform: translate(-50%, -50%);
    cursor: pointer;
    font-size: 30px;
    font-weight: 200;
}
.back-btn :hover{
    opacity: 0.7;
    transition : all 0.3s;
}
h1 {
    margin-bottom: 20px;
}

.grid-container {
    margin-top: 30px;
}

.row-profile {
    border-right: 0.06em solid #ddd;
}

@media screen and (max-width:595px) {
    .row-profile {
        border-right: none;
    }
    .row-skill {
        padding-bottom: 35px;
        border-bottom: 0.04em solid #ddd;
    }
}

.row-profile .profile {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 0.04em solid #ddd;
}

#profileImg {
    margin: 20px;
    width: 70%;
}

#kyungheeImg {
    margin-top: 10%;
    margin-left: 10%;
    width: 70%;
}

.education {
    margin-top: 70px;
    font-size: large;
}

.row-edu,
.row-pub {
    text-align: left;
    padding: 10px;
    margin: 15px 0px 30px 0px;
    padding-bottom: 35px;
    border-bottom: 0.04em solid #ddd;
}

#khuLink {
    text-decoration: none;
    color: #9a1919;
}

#kccPaper,
#kccCertificate {
    text-decoration: none;
    color: black;
}

#csLink {
    text-decoration: none;
    color: #3f5aab;
}

a:hover {
    opacity: 70%;
    transition : all 0.3s;
}

.skill {
    text-align: left;
}

#githubImg {
    padding: 10px;
    width: 70px;
}

#tistoryImg {
    padding: 10px;
    width: 70px;
}

#githubImg:hover {
    opacity: 80%;
    transition : all 0.3s;
}

li {
    font-size: 20px;
}

h5 {
    font-weight: 400;
}

.row-conf {
    text-align: left;
    padding: 10px;
    margin: 15px 0px 10px 0px;
}
</style>
