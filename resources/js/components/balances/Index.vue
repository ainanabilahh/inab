<template>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 w-full">
                        <thead class="bg-gray-100">
                            <tr>
                                <th scope="col" class="p-8 text-left text-xs font-medium text-gray-500">
                                    #
                                </th>
                                <th scope="col" class="p-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Current Balance
                                </th>
                                <th scope="col" class="p-8 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                        </thead>

                        <tbody class="bg-white divide-y divide-gray-200">
                            <template v-for="(item, index) in balances" :key="item.id">
                                <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{ index+1 }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                          {{ item.balance }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div v-if="item.date">
                                            {{ formatDate(item.date) }}
                                        </div>
                                        <div v-else>
                                            N/A
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useBalances from '../../composables/balances'

import {
    onMounted
} from 'vue';

export default {
    props: {
        accountId: {
            required: true,
            type: String
        }
    },
    setup(props) {

        const { balances, getBalances } = useBalances()

        onMounted(getBalances({ account_id: props.accountId }))

        return {
            balances,
        }
    },
    methods: {
        lastBalance(value) {
            return value[value.length-1].balance;
        }
    }
}
</script>
