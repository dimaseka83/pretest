import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './routes.js'
import store from './store.js'

createApp(App).use(store).use(router).mount('#app')
