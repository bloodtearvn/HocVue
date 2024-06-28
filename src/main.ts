import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import { createPinia } from 'pinia';
import './style.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue'
import router from "@/router/router.ts";

createApp(App).use(createPinia()).use(router).mount('#app')

