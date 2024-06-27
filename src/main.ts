import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import { createPinia } from 'pinia';
import './style.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue'
import Home from '@views/Home.vue'
import About from '@views/About.vue'
import Login from '@views/Login.vue'
import ListCandidate from "@views/ListCandidate.vue"
import ListIndustry from "@views/Industry.vue"

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component: Home,
            meta: {
                guest: true
            },
        },
        {
            path:'/about',
            name:'About',
            component: About,            
        },
        {
            path:'/login',
            name:'Login',
            component: Login,
            meta: {
                guest: true
            },
        },
        {
            path:'/industry_list',
            name:'Industry',
            component: ListIndustry,
            meta: {
                requiresAuth: true
            },
        },
    ]
})
createApp(App).use(createPinia()).use(router).mount('#app')

