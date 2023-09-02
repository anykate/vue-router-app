import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutView.vue'),
    },
    {
        path: '/car/:id(\\d+)',
        name: 'Car',
        component: () => import('@/views/CarView.vue'),
        children: [
            {
                path: 'manufacturer',
                name: 'Manufacturer',
                component: () => import('@/components/Manufacturer.vue'),
            },
            {
                path: 'dealer',
                name: 'Dealer',
                component: () => import('@/components/Dealer.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
