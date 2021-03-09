import Newsletter from './components/newsletter/Newsletter.vue';
import Home from './components/home/Home.vue';

// uma rota é um objeto javascpit com duas propriedades
export const routes = [
  {path: '', component: Home, title: 'Home'},
  {path: '/newsletter', component: Newsletter, title: 'Newsletter'}
];
