import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import DeduplicateView from '@/views/DeduplicateView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/deduplicate', name: 'deduplicate', component: DeduplicateView },
        { path: '/about', name: 'about', component: AboutView },
    ],
})

export default router
