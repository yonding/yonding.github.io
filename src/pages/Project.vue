<template>
    <div class="project-container container">
        <Header back_path="/#/come-and-see" :title=store.projects[$route.params.projectId-1].title></Header>
        <Project1 v-if="$route.params.projectId==1" />
        <Project2 v-if="$route.params.projectId==2" />
        <Project3 v-if="$route.params.projectId==3" />
    
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import { store } from '@/scripts/store.js';
import Project1 from "@/pages/project_pages/Project1.vue";
import Project2 from "@/pages/project_pages/Project2.vue";
import Project3 from "@/pages/project_pages/Project3.vue";


export default {
    name: 'Project',
    data() {
        return {
            store
        }
    },
    components: { Header, Project1, Project2, Project3 }
}
</script>

<style>
.project-container {
    width: 90%;
    height: 90%;
    padding: 30px;
    margin: 60px auto;
    background-color: #fff;
}

@media (max-width: 768px) {
    .project-container {
        width: 93%;
        height: 93%;
        padding: 5px;
        margin: 15px auto;
        background-color: #fff;
    }
}
</style>
