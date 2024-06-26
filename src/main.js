import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRightToBracket, faBriefcase, faEnvelope, faLocationDot, faPhone, faPhoneVolume, faSearch, faStar, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faLocationDot, faSearch, faStar, faPhone,faInstagram,faEnvelope, faPhoneVolume,faArrowRightToBracket, faBriefcase)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')