import { createRouter, createWebHistory } from 'vue-router'

// BUDGETS
import BudgetsIndex from '../components/budgets/BudgetsIndex.vue'
import BudgetsCreate from '../components/budgets/BudgetsCreate.vue'
import BudgetsEdit from '../components/budgets/BudgetsEdit.vue'

// EXPENSES
import ExpensesIndex from '../components/expenses/ExpensesIndex.vue'
import ExpensesCreate from '../components/expenses/ExpensesCreate.vue'
import ExpensesEdit from '../components/expenses/ExpensesEdit.vue'

const routes = [
    // BUDGETS
    {
        path: '/budgets',
        name: 'budgets.index',
        component: BudgetsIndex
    },
    {
        path: '/budgets/create',
        name: 'budgets.create',
        component: BudgetsCreate
    },
    {
        path: '/budgets/:id/edit',
        name: 'budgets.edit',
        component: BudgetsEdit,
        props: true
    },
    // EXPENSES
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
