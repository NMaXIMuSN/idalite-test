import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/style.scss'
import UIcomponents from './components/UI'


const app = createApp(App)

UIcomponents.forEach((component)=>{
    app.component(component.name,component)
})

app.use(store).mount('#app')
