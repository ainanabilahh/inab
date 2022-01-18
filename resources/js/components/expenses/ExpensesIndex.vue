<template>
    <div class="flex place-content-end mb-4">
        <div class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
            <router-link :to="{ name: 'expenses.create' }" class="text-sm font-medium text-black">Create an expense</router-link>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-100">
                            <tr>
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
                                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Notes</span>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Tag</span>
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>

                        <tbody class="bg-white divide-y divide-gray-200">
                            <template v-for="item in expenses" :key="item.id">
                                <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ item.name }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ item.amount }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ item.category_id }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ item.notes }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ item.tag }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <router-link :to="{ name: 'expenses.edit', params: { id: item.id } }" class="mr-2 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">Edit</router-link>
                                        <button @click="deleteExpense(item.id)" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useExpenses from '../../composables/expenses'
import {
    onMounted
} from 'vue';

export default {
    setup() {
        const { expenses, getExpenses, destroyExpense } = useExpenses()

        const deleteExpense = async (id) => {
            if (!window.confirm('You sure?')) {
                return
            }

            await destroyExpense(id)
            await getExpenses()
        }

        onMounted(getExpenses)

        return {
            expenses,
            deleteExpense,
        }
    }
}
</script>
