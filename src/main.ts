import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import store from "./store";
import '@mdi/font/css/materialdesignicons.css'


import axios from 'axios'
import VueAxios from 'vue-axios'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    components,
    directives,
})

createApp(App).use(router).use(store).use(VueAxios, axios).use(vuetify).mount('#app')
