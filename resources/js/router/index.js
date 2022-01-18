import { createRouter, createWebHistory } from 'vue-router'

import ExpensesIndex from '../components/expenses/ExpensesIndex.vue'
import ExpensesCreate from '../components/expenses/ExpensesCreate.vue'
import ExpensesEdit from '../components/expenses/ExpensesEdit.vue'

const routes = [
    {
        path: '/accounts',
        name: 'expenses.index',
        component: ExpensesIndex
    },
    {
        path: '/expenses/create',
        name: 'expenses.create',
        component: ExpensesCreate
    },
    {
        path: '/expenses/:id/edit',
        name: 'expenses.edit',
        component: ExpensesEdit,
        props: true
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
