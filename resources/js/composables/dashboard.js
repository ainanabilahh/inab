import { ref } from 'vue'
import axios from 'axios'

export default function useDashboard() {
    const dashboard = ref([])
    const errors = ref('')

    const getDashboard = async () => {
        try {
            let response = await axios.get('/api/dashboard/index')
            dashboard.value = response.data.expenses_per_month
        } catch (e) {
            console.log('e dashboard :>> ', e);
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    return {
        errors,
        dashboard,
        getDashboard,
    }
}
