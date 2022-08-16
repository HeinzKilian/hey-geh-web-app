import 'vuetify/styles'
import '@/assets/css/app.scss'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router).use(router)
const vuetify = createVuetify(
    {
        components,
        display: {
            mobileBreakpoint: 'sm',
        },
    }
)

app.use(vuetify)

app.mount('#app')
