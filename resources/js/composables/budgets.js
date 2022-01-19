import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useBudgets() {
    const budget = ref([])
    const budgets = ref([])

    const errors = ref('')
    const router = useRouter()

    const getBudgets = async () => {
        let response = await axios.get('/api/budgets')
        budgets.value = response.data.data
    }

    const getBudget = async (id) => {
        let response = await axios.get(`/api/budgets/${id}`)
        budget.value = response.data.data
    }

    const storeBudget = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/budgets', data)
            await router.push({ name: 'budgets.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateBudget = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/budgets/${id}`, budget.value)
            await router.push({ name: 'budgets.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyBudget = async (id) => {
        await axios.delete(`/api/budgets/${id}`)
    }

    return {
        errors,
        budget,
        budgets,
        getBudget,
        getBudgets,
        storeBudget,
        updateBudget,
        destroyBudget
    }
}
