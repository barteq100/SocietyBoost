import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'
import TwitterFeedComponentVue from './components/TwitterFeedComponent.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("TwitterFeedComponent", TwitterFeedComponentVue)
app.mount('#app')
