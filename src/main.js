import { createApp } from 'vue'
import App from './App'
import ElementPlus from 'element-plus'
import router from './router/router'

import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(router).mount('#app')
