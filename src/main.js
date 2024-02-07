import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { plugin, defaultConfig } from '@formkit/vue'
import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig)
app.mount('#app')
