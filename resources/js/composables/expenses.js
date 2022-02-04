import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useExpenses() {
    const expense = ref([])
    const expenses = ref([])

    const errors = ref('')
    const router = useRouter()

    // const getExpenses = async () => {
    //     let response = await axios.get('/api/expenses')
    //     expenses.value = response.data.data
    // }

    const getExpenses = async (data) => {
        try {
            let response = await axios.post('/api/expenses/index', data)
            expenses.value = response.data.data
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const getExpense = async (id) => {
        let response = await axios.get(`/api/expenses/${id}`)
        expense.value = response.data.data
    }

    const storeExpense = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/expenses', data)
            await router.push({ name: 'expenses.index' })
        } catch (e) {
            console.log('expenses store :>> ', e);
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateExpense = async (accountId, id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/expenses/${id}`, expense.value)
            await router.push({ name: 'expenses.index', params: { accountId } })
        } catch (e) {
            console.log('expenses update :>> ', e);
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyExpense = async (id) => {
        await axios.delete(`/api/expenses/${id}`)
    }

    return {
        errors,
        expense,
        expenses,
        getExpense,
        getExpenses,
        storeExpense,
        updateExpense,
        destroyExpense
    }
}
