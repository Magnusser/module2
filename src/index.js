import './style.css';
import * as bootstrap from 'bootstrap';
import {createApp} from 'vue';
import { createRoot } from 'react-dom/client';
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
document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
const router = VueRouter.createRouter({history: VueRouter.createWebHistory(), routes});
const app = createApp(App);
app.use(router);
app.mount('#app');