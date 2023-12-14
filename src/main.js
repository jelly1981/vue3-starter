import { createApp } from 'vue'
import { useStore } from "vuex"
import App from './App.vue'
import $api from "./utils/api"
import router from './router/index.js'
import store from './store/index.js'
import 'element-plus/dist/index.css'
import './style.css'


const app = createApp(App)

app.config.globalProperties.$router = router

app.config.globalProperties.$api = $api

app.use(store).use(router).mount('#app')



