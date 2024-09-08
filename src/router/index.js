import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Practicas from '../views/Practicas.vue';
import Contacto from '../views/Contacto.vue';
import AxiosApp from '../views/AxiosApp.vue';
import FetchApiApp from '../views/FetchApiApp.vue';
import WeatherApp from '../views/WeatherApp.vue';
import MathQuizApp from '../views/MathQuizApp.vue';
/* import MusicApp from '../views/MusicApp.vue'; */
import ChartJsApp from '../views/ChartJsApp.vue';
import SpotifyUiApp from '../views/SpotifyUiApp.vue';
/* import SocketIoApp from '../views/SocketIoApp.vue'; */

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/practicas', name: 'Practicas', component: Practicas },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/practicas/axiosapp', name: 'AxiosApp', component: AxiosApp },
  { path: '/practicas/fetchapiapp', name: 'FetchApiApp', component: FetchApiApp },
  { path: '/practicas/axiosapp/edit/:id', name: 'AxiosApp', component: AxiosApp },
  { path: '/practicas/weatherapp', name: 'WeatherApp', component: WeatherApp },
/*   { path: '/practicas/musicapp', name: 'MusicApp', component: MusicApp }, */
  { path: '/practicas/chartjsapp', name: 'ChartJsApp', component: ChartJsApp },
  { path: '/practicas/mathquizapp', name: 'MathQuizApp', component: MathQuizApp },
  { path: '/practicas/spotifyuiapp', name: 'SpotifyUiApp', component: SpotifyUiApp },
/*   { path: '/practicas/socketioapp', name: 'SocketIoApp', component: SocketIoApp } */
];

const router = createRouter({
  history: createWebHistory(), // Configura el historial en la URL
  routes
});

export default router;
