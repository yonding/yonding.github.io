<template>
    <div class="header-container container text-center">
            <a :href=back_path><i class="fa fa-arrow-left back-btn" aria-hidden="true"></i></a>
            <h1>{{ title }}</h1>
        </div>
        <hr>
</template>
<script>
export default{
    name:'Header',
    props:{
        title:String,
        back_path:String
    }
}
</script>
<style>

.header-container .fa{
    width: 80px;
}
.header-container {
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
    opacity: 70%;
    border:1px solid black;
    transition : all 0.3s;
}
h1 {
    margin-bottom: 20px;
    font-weight: 400;
}
</style>