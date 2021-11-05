import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from "mitt"

const emmiter = mitt()
createApp(App)
    .use(store)
    .use(router)
    .provide('emmiter', emmiter)
    .mount('#app')
