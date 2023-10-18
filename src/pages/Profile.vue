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
                <div class="row row-trans">
                    <div class="col">
                        <h2>TRANSLATIONS</h2>
                        <a href="https://dl.acm.org/doi/pdf/10.1145/1721654.1721672" target="_blank" id="kccCertificate">
                            <h5>
                                A view of cloud computing<br>
                                - Michael Armbrust, Armando Fox, Rean Griffith, Anthony D. Joseph, Randy Katz, Andy Konwinski, Gunho Lee, David Patterson, Ariel Rabkin, Ion Stoica, Matei Zaharia
                            </h5>
                        </a>
                        <a href="https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf" target="_blank" id="kccCertificate">
                            <h5>
                                A few useful things to Know about machine Learning <br>
                                - Pedro Domingos
                            </h5>
                        </a>
                        <a href="https://research.google.com/archive/mapreduce-osdi04.pdf" target="_blank" id="kccCertificate">
                            <h5>
                                MapReduce: Simplified Data Processing on Large Clusters<br>
                                - Jeffrey Dean and Sanjay Ghemawat, Google,Inc.
                            </h5>
                        </a>
                        <a href="https://www.usenix.org/system/files/conference/nsdi12/nsdi12-final138.pdf" target="_blank" id="kccCertificate">
                            <h5>
                                Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing<br>
                                - Matei Zaharia, Mosharaf Chowdhury, Tathagata Das, Ankur Dave, Justin Ma, Murphy Mc Cauley, Michael J. Franklin, Scott Shenker, Ion Stoica
                            </h5>
                        </a>
                        <a href="https://arxiv.org/pdf/2004.03814.pdf" target="_blank" id="kccCertificate">
                            <h5>
                                Bao: Learning to Steer Query Optimizers<br>
                                - Ryan Marcus, Parimarjan Negi, Hongzi Mao, Nesime Tatbul, Mohammad Alizadeh, Tim Kraska
                            </h5>
                        </a>
                        <a href="https://db.in.tum.de/~anneser/autosteer-paper.pdf?lang=en" target="_blank" id="kccCertificate">
                            <h5>
                                AutoSteer: Learned Query Optimization for Any SQL Database<br>
                                - Christoph Anneser, Nesime Tatbul, David Cohen, Zhenggang Xu, Prithviraj Pandian, Nikolay Laptev, Ryan Marcus
                            </h5>
                        </a>
                        <a href="https://web.stanford.edu/~bvr/pubs/TS_Tutorial.pdf" target="_blank" id="kccCertificate">
                            <h5>
                                A Tutorial on Thompson Sampling<br>
                                - Daniel Russo, Benjamin Van Roy, Abbas Kazerouni, Ian Osband, Zheng Wen
                            </h5>
                        </a>
                        <a href="https://arxiv.org/pdf/1802.05800.pdf" target="_blank" id="kccCertificate">
                            <h5>
                                Tree-CNN: A Hierarchical Deep Convolutional Neural Network for Incremental Learning<br>
                                - Deboleena Roy, Priyadarshini Panda, Kaushik Roy
                            </h5>
                        </a>

                        
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 30px;">
        </div>
    </div>

</template>

<script>
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
</style>

<style scoped>

.profile-container {
        width: 90%;
        height: 90%;
        padding: 30px;
        margin: 60px auto;
        background-color: #fff;
    }
.grid-container {
    margin-top: 30px;
}

.row-profile {
    border-right: 0.06em solid #ddd;
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
.row-pub , .row-conf{
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
    transition: all 0.3s;
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
    transition: all 0.3s;
}
#tistoryImg:hover {
    opacity: 80%;
    transition: all 0.3s;
}
li {
    font-size: 20px;
}

.row-pub h2,
.row-conf h2, 
.row-trans h2{
    margin-bottom: 20px;
}
.row-trans h5{
    margin-bottom: 20px;
}
h5 {
    font-weight: 400;
}

.row-con, .row-trans {
    text-align: left;
    padding: 10px;
    margin: 15px 0px 10px 0px;
}

@media (max-width:768px) {
    .grid-container{
        margin: 5px auto;
    }
    #kyungheeImg{
        margin: 20px 0px 10px 10px;
        width: 50%;
    }
    .row-2{
        margin:13px;
    }
    .col{
        margin: 10px auto;
    }
    .row-profile {
        border-right: none;
    }
    .row-skill {
        padding-bottom: 35px;
        border-bottom: 0.04em solid #ddd;
    }
    .profile-container {
        width: 90%;
        height: 90%;
        padding: 5px;
        margin: 15px auto;
        background-color: #fff;
    }

    *, ::after, ::before {
    box-sizing:content-box;
    }
    #name{
        font-size:28px;
    }
    .profile h3{
        font-size: 22px;
    }

    #githubImg {
        margin: 10px 0px;
        padding: 5px;
        width: 50px;
    }

    #tistoryImg {
        margin: 10px 0px;
        padding: 5px;
        width: 50px;
    }

}
</style>
