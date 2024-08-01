import { createRouter, createWebHistory } from 'vue-router';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Blog from './components/Blog.vue';
import WhyUs from './components/ChooseSection.vue'; // Renamed to follow naming conventions
import Login from './components/Login.vue';

// Define routes
const routes = [
  { path: '/', component: Header }, // You might want to change this to a main view component
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/whyus', component: WhyUs }, // Renamed to follow naming conventions
  { path: '/login', component: Login },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
