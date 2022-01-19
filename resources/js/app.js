require('./bootstrap');
// require('date-fns');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';
import router from './router'
import moment from 'moment'
import ExpensesIndex from './components/expenses/ExpensesIndex.vue';

const app = createApp({
    data() {
        return { open: false }
    },
    components: {
        ExpensesIndex,
    }
}).use(router)

app.mixin({
    methods: {
        capitalizeFirstLetter: (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        formatDate: (value) => {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY')
            }
        },
        truncate: (text, length, suffix) => {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
        convertFloat: (value) => {
            if (value) {
                return parseFloat(value).toFixed(2)
            }
        },
        getSelectedMonth: () => {
            return moment(String(new Date())).format('MMMM YYYY')
        },
    }
})


app.mount('#app')
