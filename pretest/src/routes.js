import { createRouter, createWebHistory } from 'vue-router';
import Login from './page/Login.vue';
import Chat from './page/chat/index.vue';
import ChatDetail from './page/chat/detail.vue';
const routes = [
    {
        path: '/',
        component: Login,
        name: 'Login',
    },
    {
        path: '/chat',
        component: Chat,
        name: 'Chat',
    },
    {
        path: '/chat/:id',
        component: ChatDetail,
        name: 'ChatDetail',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;