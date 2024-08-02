import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/style/main.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRightToBracket,faArrowUpFromBracket, faBriefcase, faEnvelope, faLocationDot, faPhone, faPhoneVolume,faStar, faSearch, faUserSecret, faXmarkCircle} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './assets/tailwind.css'

/* add icons to the library */
library.add(faUserSecret, faLocationDot, faSearch, faStar,faArrowUpFromBracket, faPhone,faInstagram, faTrashCan, faEnvelope,faPenToSquare, faPhoneVolume,faArrowRightToBracket, faBriefcase, faStarRegular, faXmarkCircle)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')