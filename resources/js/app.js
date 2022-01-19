require('./bootstrap');
// require('date-fns');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';
import router from './router'
import ExpensesIndex from './components/expenses/ExpensesIndex.vue';
import { func } from './plugins/mixin.js'

const app = createApp({
    data() {
        return { open: false }
    },
    components: {
        ExpensesIndex,
    }
}).use(router)

app.config.globalProperties.$myGlobalVariable = func

app.mount('#app')
