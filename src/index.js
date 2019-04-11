import styles from './scss/main.scss'

import toggleNav from './js/toggle_nav'
import routes from './js/routes'
import png from './img/logo.png'


const FooterYear = document.querySelector('.Footer-year')

toggleNav()
routes()


FooterYear.textContent = new Date().getFullYear()
