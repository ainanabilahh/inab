import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useSubCategories() {
    const subCategory = ref([])
    const subCategories = ref([])

    const errors = ref('')
    const router = useRouter()

    const getSubCategories = async () => {
        let response = await axios.get('/api/sub_categories')
        subCategories.value = response.data.data
    }

    const getSubCategory = async (id) => {
        let response = await axios.get(`/api/sub_categories/${id}`)
        subCategory.value = response.data.data
    }

    const storeSubCategory = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/sub_categories', data)
            await router.push({ name: 'sub_categories.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateSubCategory = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/sub_categories/${id}`, subCategory.value)
            await router.push({ name: 'sub_categories.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroySubCategory = async (id) => {
        await axios.delete(`/api/sub_categories/${id}`)
    }

    return {
        errors,
        subCategory,
        subCategories,
        getSubCategory,
        getSubCategories,
        storeSubCategory,
        updateSubCategory,
        destroySubCategory
    }
}
