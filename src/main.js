import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routes'
const pinia = createPinia()
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import VueLazyload from 'vue-lazyload'
import BtnMore from './components/UI/BtnMore.vue'
import Actors from './components/UI/Actors.vue'
import loadimage from './assets/img/loading.gif'
import errorimage from './assets/img/no-image.png'

createApp(App)
.use(pinia)
.use(router)
.use(VueLazyload, {
    error: errorimage,
    loading: loadimage,
  })
.component('font-awesome-icon', FontAwesomeIcon)
.component('BtnMore', BtnMore)
.component('Actors', Actors)
.mount('#app')
