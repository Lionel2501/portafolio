import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Crear la aplicación Vue
const app = createApp(App);

// Usar el router
app.use(router);

// Usar VueAxios con Axios
app.use(VueAxios, axios);

// Montar la aplicación en el DOM
app.mount('#app');

