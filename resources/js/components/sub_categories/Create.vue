<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>

    <form class="space-y-6" @submit.prevent="saveSubCategory">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.name">
                </div>
            </div>
        </div>
        <button type="submit" class="mt-4 inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Create
        </button>
    </form>
</template>

<script>
import useSubCategorys from '../../composables/sub_categories'
import { reactive } from 'vue'

export default {
    setup() {
        const form = reactive({
            name: '',
        })

        const { errors, storeSubCategory } = useSubCategorys()

        const saveSubCategory = async () => {
            await storeSubCategory({ ...form })
        }

        return {
            form,
            errors,
            saveSubCategory
        }
    }
}
</script>
