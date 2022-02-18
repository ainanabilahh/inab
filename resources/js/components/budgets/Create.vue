<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>

    <form class="space-y-6" @submit.prevent="saveBudget">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.name">
                </div>
            </div>
        </div>

        <table class="min-w-full divide-y divide-gray-200 w-full mt-4">
            <thead class="bg-gray-100">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-if="items.length > 0">
                <tr v-for="(item, index) in items" :key="index">
                    <td class="ml-2">{{ index+1 }}</td>

                    <td>
                        <input type="text" v-model="form.category_names" name="category_name[]" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </td>

                    <td>
                        <select v-model="form.sub_category_id" id="category_id" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option v-for="sub_category in subCategories" v-bind:key="sub_category.id" v-bind:value="sub_category.id">
                                {{ sub_category.name }}
                            </option>
                        </select>
                    </td>

                    <td>
                        <input type="text" name="amount" id="amount" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.amount">
                    </td>

                    <td>
                        <button type="button" @click="removeItem" class="inline-flex items-center px-2 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                            <svg class="w-4 h-4" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="min-w-full divide-y divide-gray-200 w-full mt-4">
            <thead class="bg-gray-100">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody v-if="items.length > 0">
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{ index+1 }}</td>

                    <td>
                        <input type="text" v-model="form.category_names" name="category_name[]" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </td>

                    <td>
                        <select v-model="form.sub_category_id" id="category_id" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option v-for="sub_category in subCategories" v-bind:key="sub_category.id" v-bind:value="sub_category.id">
                                {{ sub_category.name }}
                            </option>
                        </select>
                    </td>

                    <td>
                        <input type="text" name="amount" id="amount" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.amount">
                    </td>

                    <td>
                        <button type="button" @click="removeItem" class="inline-flex items-center px-2 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                            <svg class="w-4 h-4" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="mt-4 inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            <button type="button" class="newItem" @click="AddItem">Add new row</button>
        </div>

        <button type="submit" class="mt-4 inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Create
        </button>
    </form>
</template>

<script>
import useBudgets from '../../composables/budgets'
import useSubCategories from '../../composables/sub_categories'
import { reactive, onMounted } from 'vue'

export default {
    data() {
        return {
            items: [{
                category_name: '',
            }]
        }
    },
    methods: {
        AddItem() {
            this.items.push({
                category_name: '',
            })

            form.category_names.push({ category_name: ''});
          },

        removeItem() {
            this.items.splice(this.items, 1)
        }
    },
    setup() {
        const form = reactive({
            user_id: document.querySelector("meta[name='user_id']").getAttribute('content'),
            name: '',
            category_names: [],
            setResources(category_names) {
                this.category_names = category_names
            },
        })

        const { errors, storeBudget } = useBudgets()
        const { subCategories, getSubCategories } = useSubCategories()

        onMounted(getSubCategories)

        const saveBudget = async () => {
            await storeBudget({ ...form })
        }

        return {
            form,
            errors,
            subCategories,
            saveBudget
        }
    }
}
</script>
