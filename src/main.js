//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// create(App).mount('#app');
import router from './router';

//App.use(router);
createApp(App).use(router).mount('#app');
