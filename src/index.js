import './style.css';
import * as bootstrap from 'bootstrap';
import {createApp} from 'vue';
const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/todo',
        component: ToDo,
        name: 'ToDo'
    },
    {
        path: '/clicker',
        component: Clicker,
        name: 'Clicker'
    },
    {
        path: '/rickandmorty',
        component: RickAndMorty,
        name: 'Rick And Morty'
    }, {
        path: '/gmaps',
        component: GoogleMaps,
        name: 'Google Maps'
    }, {
        path: '/leaflet',
        component: Leaflet,
        name: 'Leaflet'
    }
];
const router = VueRouter.createRouter({history: VueRouter.createWebHistory(), routes});
const app = createApp(App);
app.use(router);
app.mount('#app');