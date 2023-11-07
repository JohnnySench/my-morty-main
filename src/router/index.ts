import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Character from "@/views/Character.vue";


const routes = [
    {
        path: '/',
        name: 'main',
        component: Home,
    },
    {
        path: '/characters/:userId',
        name: 'character',
        component: Character
    }
]


const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router;



