import { createRouter, createWebHistory } from 'vue-router'

import ExpensesIndex from '../components/expenses/ExpensesIndex.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'expenses.index',
        component: ExpensesIndex
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
