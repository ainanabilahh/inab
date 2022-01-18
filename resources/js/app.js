require('./bootstrap');

// require('alpinejs');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import { createApp } from 'vue';
import router from './router'

import ExpensesIndex from './components/expenses/ExpensesIndex.vue';

const app = createApp({
    data() {
        return { open: false }
    },
    components: {
        ExpensesIndex,
        Datepicker
    }
}).use(router)
app.component('Datepicker', Datepicker);
app.mount('#app');
