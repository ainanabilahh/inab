<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>

    <!-- <form class="space-y-6" @submit.prevent="saveBudget"> -->
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="budget.name">
                </div>
            </div>
        </div>

        <!--  Existing Record -->
        <b class="mt-4">EXISTING RECORD</b>
        <table class="min-w-full divide-y divide-gray-200 w-full">
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
                        <input type="text" v-model="budget.category_names" name="category_name[]" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </td>

                    <td>
                        <select v-model="budget.sub_category_id" id="category_id" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option v-for="sub_category in subCategories" v-bind:key="sub_category.id" v-bind:value="sub_category.id">
                                {{ sub_category.name }}
                            </option>
                        </select>
                    </td>

                    <td>
                        <input type="text" name="amount" id="amount" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="budget.amount">
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

        <form class="space-y-6" @submit.prevent="saveCategory">
            <!--  Add Record -->
            <b class="mt-4">ADD RECORD</b>
            <table class="min-w-full divide-y divide-gray-200 w-full">
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
                            <input type="text" v-model="form.name" name="category_name[]" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </td>

                        <td>
                            <select v-model="form.sub_category_id" id="category_id" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                <option v-for="sub_category in subCategories" v-bind:key="sub_category.id" v-bind:value="sub_category.id">
                                    {{ sub_category.name }}
                                </option>
                            </select>
                        </td>

                        <td>
                            <input v-model="form.amount" type="text" name="amount" id="amount" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </td>

                        <td>
                            <!-- <button type="button" @click="removeItem" class="inline-flex items-center px-2 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 mr-2">
                                <svg class="w-4 h-4" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                                </svg>
                            </button> -->
                            <button type="submit" class="inline-flex items-center px-2 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>

        <button type="submit" class="mt-4 inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Save
        </button>
    <!-- </form> -->
</template>

<script>
    import useBudgets from '../../composables/budgets'
    import useCategories from '../../composables/categories'
    import useSubCategories from '../../composables/sub_categories'
    import {
        onMounted,
        reactive
    } from 'vue';

    export default {
        props: {
            id: {
                required: true,
                type: String
            }
        },
        data() {
            return {
                items: [{
                    category_name: '',
                }]
            }
        },
        watch: {
            'items': {
                handler(newValue, oldValue) {
                    newValue.forEach((item) => {
                        item.total = item.quantity * item.amount
                    })
                },
                deep: true
            }
        },
        methods: {
            AddItem() {
                this.items.push({
                    category_name: '',
                })
            },
            removeItem() {
                this.items.splice(this.items, 1)
            }
        },
        setup(props) {
            // BUDGETS
            const {
                budget,
                updateBudget,
                getBudget
            } = useBudgets()

            onMounted(() => getBudget(props.id))

            const saveBudget = async () => {
                await updateBudget(props.id)
            }
            // END OF BUDGETS

            // SUB-CATEGORIES
            const {
                subCategories,
                getSubCategories
            } = useSubCategories()

            onMounted(getSubCategories)
            // END OF SUB-CATEGORIES

            // CATEGORIES
            const {
                errors,
                storeCategory,
            } = useCategories()

            const saveCategory = async () => {
                await storeCategory({ ...form })
            }

            const form = reactive({
                name: '',
                budget_id: props.id,
                sub_category_id: '',
                amount: '',
            })
            // END OF CATEGORIES

            return {
                form,
                errors,
                budget,
                saveBudget,
                subCategories,
                saveCategory,
            }
        }
    }
</script>
