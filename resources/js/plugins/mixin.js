
export const func = {
    methods: {
        capitalizeFirstLetter: (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        formatDate: (value) => {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY')
            }
        },
        truncate: (text, length, suffix) => {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
        convertFloat: (value) => {
            if (value) {
                return parseFloat(value).toFixed(2)
            }
        },
        getSelectedMonth: () => {
            return moment(String(new Date())).format('MMMM YYYY')
        },
    }
}
