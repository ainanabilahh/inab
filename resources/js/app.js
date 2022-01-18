require('./bootstrap');

// require('alpinejs');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';
import router from './router'

import ExpensesIndex from './components/expenses/ExpensesIndex.vue';

createApp({
    data() {
        return { open: false }
    },
    components: {
        ExpensesIndex
    }
}).use(router).mount('#app')
