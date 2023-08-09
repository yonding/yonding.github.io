<template>
    <header class="d-flex justify-content-center py-3">
        <ul class="nav">
            <li class="nav-item hey"><a href="/#/who-is-yonding" class="nav-link" data-transition="fade">Who is yonding?</a></li>
            <div id="blank"></div>
            <li class="nav-item"><a href="/#/come-and-see" class="nav-link">Come and See</a></li>
        </ul>
    </header>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    width: 100%;
    justify-content: center;
}

a {
    font-weight: 600;
    font-size: x-large;
    color: #333;
}

a:hover {
    border: 0.01em solid;
    opacity: 80%;
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
}

#blank{
    width:30%;
}
@media screen and (max-width: 700px) {
    #blank{
        width: 0px;
    }
}
</style>
