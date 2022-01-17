import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useExpenses() {
    const company = ref([])
    const expenses = ref([])

    const errors = ref('')
    const router = useRouter()

    const getExpenses = async () => {
        let response = await axios.get('/api/expenses')
        expenses.value = response.data.data
    }

    const getExpense = async (id) => {
        let response = await axios.get(`/api/expenses/${id}`)
        company.value = response.data.data
    }

    const storeExpense = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/expenses', data)
            await router.push({ name: 'expenses.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }

    }

    const updateExpense = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/expenses/${id}`, company.value)
            await router.push({ name: 'expenses.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    return {
        errors,
        company,
        expenses,
        getExpense,
        getExpenses,
        storeExpense,
        updateExpense
    }
}
