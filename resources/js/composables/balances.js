import { ref } from 'vue'
import axios from 'axios'

export default function useBalances() {
    const balances = ref([])
    const errors = ref('')

    const getBalances = async () => {
        let response = await axios.get('/api/balances')
        console.log('response :>> ', response);
        balances.value = response.data.data
    }

    return {
        errors,
        balances,
        getBalances,
    }
}
