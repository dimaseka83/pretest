import {
    createWebHistory,
    createRouter,
} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: () => import('./page/Login.vue'),
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('./page/chat/index.vue'),
    },
    {
        path: '/chat/:id',
        name: 'ChatDetail',
        component: () => import('./page/chat/detail.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;