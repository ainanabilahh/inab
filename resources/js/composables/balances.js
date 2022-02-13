import { ref } from 'vue'
import axios from 'axios'

export default function useBalances() {
    const balances = ref([])
    const errors = ref('')

    const getBalances = async (data) => {
        try {
            let response = await axios.post('/api/balances/index', data)
            balances.value = response.data.data
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
        balances,
        getBalances,
    }
}
