import { createRouter, createWebHistory } from 'vue-router'

// ACCOUNTS
import AccountsIndex from '../components/accounts/Index.vue'
import AccountsCreate from '../components/accounts/Create.vue'
import AccountsEdit from '../components/accounts/Edit.vue'

// BUDGETS
import BudgetsIndex from '../components/budgets/Index.vue'
import BudgetsCreate from '../components/budgets/Create.vue'
import BudgetsEdit from '../components/budgets/Edit.vue'

// EXPENSES
import ExpensesIndex from '../components/expenses/Index.vue'
import ExpensesCreate from '../components/expenses/Create.vue'
import ExpensesEdit from '../components/expenses/Edit.vue'

// SUB-CATEGORIES
import SubCategoriesIndex from '../components/sub_categories/Index.vue'
import SubCategoriesCreate from '../components/sub_categories/Create.vue'
import SubCategoriesEdit from '../components/sub_categories/Edit.vue'

const routes = [
    // ACCOUNTS
    {
        path: '/accounts',
        name: 'accounts.index',
        component: AccountsIndex
    },
    {
        path: '/accounts/create',
        name: 'accounts.create',
        component: AccountsCreate
    },
    {
        path: '/accounts/:id/edit',
        name: 'accounts.edit',
        component: AccountsEdit,
        props: true
    },
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
        path: '/expenses/:accountId',
        name: 'expenses.index',
        component: ExpensesIndex,
        props: true
    },
    {
        path: '/expenses/create/:accountId',
        name: 'expenses.create',
        component: ExpensesCreate,
        props: true
    },
    {
        path: '/expenses/:id/edit',
        name: 'expenses.edit',
        component: ExpensesEdit,
        props: true
    },
    // SUB-CATEGORIES
    {
        path: '/sub_categories',
        name: 'sub_categories.index',
        component: SubCategoriesIndex
    },
    {
        path: '/sub_categories/create',
        name: 'sub_categories.create',
        component: SubCategoriesCreate
    },
    {
        path: '/sub_categories/:id/edit',
        name: 'sub_categories.edit',
        component: SubCategoriesEdit,
        props: true
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
