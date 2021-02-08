import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Company from '@/views/company'
import SolutionSF from '@/views/solutionSF'
import SolutionRPA from '@/views/solutionRPA'
import Recruitment from '@/views/recruitment'
import Contact from '@/views/contact'

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
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router