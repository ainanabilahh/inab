import { createRouter, createWebHistory } from 'vue-router'

import ExpensesIndex from '../components/expenses/ExpensesIndex.vue'
import ExpensesCreate from '../components/expenses/ExpensesCreate.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'expenses.index',
        component: ExpensesIndex
    },
    {
        path: '/dashboard',
        name: 'expenses.create',
        component: ExpensesCreate
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
