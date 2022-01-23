<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>

    <form class="space-y-6" @submit.prevent="saveExpense">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="expense.name">
                </div>
            </div>

            <div>
                <label for="amount" class="mt-4 block text-sm font-medium text-gray-700">Amount</label>
                <div class="mt-1">
                    <input type="text" name="amount" id="amount"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="expense.amount">
                </div>
            </div>

            <div>
                <label for="category_id" class="mt-4 block text-sm font-medium text-gray-700">Category</label>
                <div class="mt-1">
                    <select v-model="expense.category_id" id="category_id" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        <option v-for="category in categories" v-bind:key="category.id" v-bind:value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div>
                <label for="date" class="mt-4 block text-sm font-medium text-gray-700">Date</label>
                <div class="mt-1">
                    <input type="date" name="date" id="date"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="expense.date">
                </div>
            </div>

            <div>
                <label for="link" class="mt-4 block text-sm font-medium text-gray-700">Link</label>
                <div class="mt-1">
                    <input type="text" name="link" id="link"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="expense.link">
                </div>
            </div>
        </div>

        <button type="submit"
                class="mt-4 inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Save
        </button>
    </form>
</template>

<script>
import useExpenses from '../../composables/expenses'
import useCategories from '../../composables/sub_categories'
import { onMounted } from 'vue';

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const { errors, expense, updateExpense, getExpense } = useExpenses()
        const { categories, getCategories } = useCategories()

        onMounted(() => getExpense(props.id))
        onMounted(getCategories)

        const saveExpense = async () => {
            await updateExpense(props.id)
        }

        return {
            errors,
            expense,
            categories,
            saveExpense
        }
    }
}

</script>
