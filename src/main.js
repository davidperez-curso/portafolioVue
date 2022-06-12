import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vueNextAnimejs from '@maybecode/vue-next-animejs'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueNextAnimejs)

app.mount('#app')
