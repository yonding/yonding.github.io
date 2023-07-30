<template>
    <div class="col">
        <a :href="`/#/come-and-see/${project.no}`">
            <div class="card shadow-sm">
                <img :src="require(`@/assets/card_img/card_img_${project.no}.png`)" class="bd-placeholder-img card-img-top"/>
                <div class="card-body">
                    <p class="card-title">{{ project.title }}</p>
                    <p class="card-text">{{ project.text }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        </div>
                        <small class="text-body-secondary"></small>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>


<script>
export default{
    name:'Card',
    props:{
        project:Object
    }
}
</script>

<style scoped>
.col{
    margin-bottom:30px;
}
.card-title {
    font-size: 20px;
    font-weight: 400;
    text-align: left;
}

.card-text {
    text-align: left;
}
a{
    text-decoration:none;
    color:black;
}
a:hover{
    opacity: 70%;
    transition : all 0.3s;
}
</style>