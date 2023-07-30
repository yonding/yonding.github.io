<template>
    <div class="profile-container container text-center">
        <Header title="PROFILE" back_path="/#/"></Header>
        <div class="row grid-container">
            <div class="col col-md-4 row-profile">
                <div class="row-2">
                    <div class="profile">
                        <img src="@/assets/profile_img.jpeg" id="profileImg" alt="profile_img">
                        <h2 id="name">Kayoung Kim</h2>
                        <h3>@yonding</h3>
                        <h3>Backend Developer</h3>
                        <a href="https://github.com/yonding" target="_blank"><img src="@/assets/github_logo.png" alt="github_logo" id="githubImg"></a>
                        <a href="https://yonding.tistory.com/" target="_blank"><img src="@/assets/tistory_logo.png" alt="tistory_logo" id="tistoryImg"></a>
                    </div>
                </div>
                <div class="row-2 row-skill">
                    <div class="skill">
                        <h2>&nbsp;&nbsp;SKILLS</h2>
                        <ul class="text-left">
                            <li>Java & Spring</li>
                            <li>Docker & K8s</li>
                            <li>MySQL, Redis</li>
                            <li>Basic Frontend Skills<br>: HTML, CSS, JS, Vue.js</li>
                        </ul>
                    </div>
                </div>
            </div>
    
            <div class="col col-md-8 row-info">
                <div class="row row-edu">
    
                    <div class="col col-md-5 education-img">
                        <h2>EDUCATION</h2>
                        <img src="@/assets/kyunghee.png" id="kyungheeImg" alt="kyunghee">
                    </div>
                    <div class="col col-md-7 education">
                        <h4><a href="https://www.khu.ac.kr/" id="khuLink" target="_blank">Kyung Hee University</a></h4>
                        <h4><a href="https://ce.khu.ac.kr/ce/user/main/view.do" id="csLink" target="_blank">CS and Engineering</a></h4>
                        <h5>
                            Bachelor of Engineering in Computer Engineering
                            <br>GPA: 4.0/4.3, 2019-2023
                        </h5>
                    </div>
                </div>
                <div class="row row-pub">
                    <div class="col">
                        <h2>PUBLICATIONS</h2>
                        <a href="https://yonding.s3.ap-northeast-2.amazonaws.com/Apache+Calcite+Adapter+Architecture+for+Efficient+Query+Federation.pdf" target="_blank" id="kccPaper">
                            <h5>
                                효율적인 질의 페더레이션을 위한 Apache Calcite 어댑터 아키텍처
                            </h5>
                            <h5>
                                Apache Calcite Adapter Architecture for Efficient Query Federation (KCC 2023)
                            </h5>
                        </a>
    
                    </div>
                </div>
    
                <div class="row row-conf">
                    <div class="col">
                        <h2>CONFERENCES</h2>
                        <a href="https://yonding.s3.ap-northeast-2.amazonaws.com/certificate2_kcc2023.pdf" target="_blank" id="kccCertificate">
                            <h5>
                                2023 한국컴퓨터종합학술대회 (KCC 2023) 참석 및 발표
                            </h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import Header from '../components/Header.vue'
export default {
    name: "Profile",
    components: { Header }
};
</script>

<style>
body {
    justify-content: center;
    align-items: center;
    background-color: #ccc;
}

.profile-container {
    width: 90%;
    height: 90%;
    padding: 30px;
    margin: 60px auto;
    background-color: #fff;
}

</style>

<style scoped>

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
.row-pub h2, .row-conf h2{
    margin-bottom: 20px;
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
