require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';
import router from './router'

import ExpensesIndex from './components/expenses/ExpensesIndex.vue';

createApp({
    components: {
        ExpensesIndex
    }
}).use(router).mount('#app')
