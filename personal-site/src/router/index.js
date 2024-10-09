import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import AboutView from '../components/AboutView.vue'
import ProjectView from '../components/ProjectView.vue'
import CourseworkView from '../components/CourseworkView.vue'
const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/projects', name: 'Projects', component: ProjectView},
  { path: '/about', name: 'About', component: AboutView },
  { path: '/coursework', name: 'Coursework', component: CourseworkView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
