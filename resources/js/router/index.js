import { createRouter, createWebHistory } from 'vue-router'

// BUDGETS
import BudgetsIndex from '../components/budgets/BudgetsIndex.vue'
import BudgetsCreate from '../components/budgets/BudgetsCreate.vue'
import BudgetsEdit from '../components/budgets/BudgetsEdit.vue'

// EXPENSES
import ExpensesIndex from '../components/expenses/ExpensesIndex.vue'
import ExpensesCreate from '../components/expenses/ExpensesCreate.vue'
import ExpensesEdit from '../components/expenses/ExpensesEdit.vue'

// SUB-CATEGORIES
import SubCategoriesIndex from '../components/sub_categories/Index.vue'
import SubCategoriesCreate from '../components/sub_categories/Create.vue'
import SubCategoriesEdit from '../components/sub_categories/Edit.vue'

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
