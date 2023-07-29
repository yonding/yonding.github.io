import {
    createApp
} from 'vue';
import App from './App.vue';
import router from '@/scripts/router.js'


createApp(App).use(router).mount('#app');