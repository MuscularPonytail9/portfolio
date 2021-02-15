import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Company from '@/views/company'
import SolutionSF from '@/views/solutionSF'
import SolutionRPA from '@/views/solutionRPA'
import Recruitment from '@/views/recruitment'
import Contact from '@/views/contact'
import Clients from '@/views/clients'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/company',
        name: 'Company',
        component: Company
    },
    {
        path: '/solutionSF',
        name: 'SolutionSF',
        component: SolutionSF
    },
    {
        path: '/solutionRPA',
        name: 'SolutionRPA',
        component: SolutionRPA
    },
    {
        path: '/recruitment',
        name: 'Recruitment',
        component: Recruitment
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/clients',
        name: 'Clients',
        component: Clients
    },    
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
    }
})

export default router