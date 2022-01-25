import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useAccounts() {
    const account = ref([])
    const accounts = ref([])

    const errors = ref('')
    const router = useRouter()

    const getAccounts = async () => {
        let response = await axios.get('/api/accounts')
        accounts.value = response.data.data
    }

    const getAccount = async (id) => {
        let response = await axios.get(`/api/accounts/${id}`)
        account.value = response.data.data
    }

    const storeAccount = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/accounts', data)
            await router.push({ name: 'accounts.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateAccount = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/accounts/${id}`, account.value)
            await router.push({ name: 'accounts.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyAccount = async (id) => {
        await axios.delete(`/api/accounts/${id}`)
    }

    return {
        errors,
        account,
        accounts,
        getAccount,
        getAccounts,
        storeAccount,
        updateAccount,
        destroyAccount
    }
}
