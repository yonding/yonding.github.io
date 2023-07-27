import Home from "@/pages/Home.vue";
import Profile from "@/pages/Profile.vue";
import Portfolio from "@/pages/Portfolio.vue";
import Project from "@/pages/Project.vue";
import Project1 from "@/pages/project_pages/Project1.vue";
import Project2 from "@/pages/project_pages/Project2.vue";
import Project3 from "@/pages/project_pages/Project3.vue";

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {path:'/', component:Home},
    {path:'/who-is-yonding', component:Profile},
    {path:'/come-and-see', component:Portfolio},
    {path:'/come-and-see/:projectId', component:Project}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;