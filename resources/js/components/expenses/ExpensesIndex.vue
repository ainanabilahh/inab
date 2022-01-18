<template>
    <div class="flex place-content-end mb-4">
        <div class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
            <router-link :to="{ name: 'expenses.create' }" class="text-sm font-medium text-black">Create an expense</router-link>
        </div>
    </div>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <table class="min-w-full border divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 bg-gray-50">
                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Name</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Category</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Notes</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase tracking-wider">Tag</span>
                    </th>
                    <th class="bg-gray-50"></th>
                </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <template v-for="item in expenses" :key="item.id">
                    <tr class="bg-white">
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ item.name }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ item.category_id }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ item.notes }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ item.tag }}
                        </td>
                        <td class="px-6 py-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                            <button @click="deleteExpense(item.id)" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                Delete
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
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
