<template>
    <h2 class="font-semibold text-xl text-gray-800 leading-tight mb-4" v-if="expenses.length > 0">
        {{ expenses[0]['account']['name'] }}
    </h2>
    <div class="flex place-content-end mb-4">
        <div class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
            <router-link :to="{ name: 'expenses.create' }" class="text-sm font-medium text-black">Create an expense</router-link>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <Datepicker v-model="month" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" monthPicker @closed="filterExpense()" />
                <br />
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 w-full">
                        <thead class="bg-gray-100">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">#</span>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Name</span>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Amount</span>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Category</span>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Date</span>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                            <tbody class="bg-white divide-y divide-gray-200" v-if="expenses.length > 0">
                                <template v-for="(item, index) in expenses" :key="item.id">
                                    <tr class="bg-white">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ index+1 }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div v-if="item.link">
                                                <a :href="item.link" :title="item.name"><u>{{ truncate(item.name, 35, '...') }}</u></a>
                                            </div>
                                            <div v-else>
                                                 <a :title="item.name">{{ truncate(item.name, 35, '...') }}</a>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            RM {{ convertFloat(item.amount) }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ item.sub_category.name }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            {{ formatDate(item.date) }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <router-link :to="{ name: 'expenses.edit', params: { id: item.id } }" title="Edit" class="mr-2 inline-flex items-center px-2 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                                <svg class="w-4 h-4" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                </svg>
                                            </router-link>

                                            <button @click="deleteExpense(item.id)" title="Delete" class="inline-flex items-center px-2 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                                <svg class="w-4 h-4" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        <tbody v-else>
                            No data found
                        </tbody>
                        <tfoot v-if="expenses.length > 0">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap" colspan="2">
                                    <p class="text-right">TOTAL</p>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap" colspan="4">RM {{ totalItem }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useExpenses from '../../composables/expenses'
import {
    onMounted,
    ref
} from 'vue';

export default {
    props: {
        accountId: {
            required: true,
            type: String
        }
    },
    computed: {
        totalItem: function () {
            let sum = 0;
            this.expenses.forEach(function (item) {
                sum += (parseFloat(item.amount));
            });

            return sum.toFixed(2);
        },
    },
    setup(props) {
        const month = ref({
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        });

        const {
            expenses,
            getExpenses,
            destroyExpense
        } = useExpenses()

        const deleteExpense = async (id) => {
            if (!window.confirm('You sure?')) {
                return
            }

            await destroyExpense(id)
            await getExpenses({ account_id: props.accountId })
        }

        const filterExpense = async () => {
            await getExpenses({ account_id: props.accountId, month:month.value.month+1, year:month.value.year })
        }

        onMounted(getExpenses({ account_id: props.accountId }))

        return {
            month,
            expenses,
            filterExpense,
            deleteExpense,
        }
    }
}
</script>
