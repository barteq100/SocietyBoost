import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'
import TwitterFeedComponent from './components/TwitterFeedComponent.vue'
import InstagramFeedComponent from './components/InstagramFeedComponent.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("TwitterFeedComponent", TwitterFeedComponent)
app.component("InstagramFeedComponent", InstagramFeedComponent)
app.mount('#app')
