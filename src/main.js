import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).use(mdiVue, {
  icons: mdijs
}).mount('#app')
