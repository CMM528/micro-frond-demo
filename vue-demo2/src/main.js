import "./public.path"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


console.log('子应用阿斯了么')
createApp(App).use(router).mount('#app')
