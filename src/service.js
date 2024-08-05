import repository from "./repository.js"

class Service {
    constructor(){}

    async createExpenseLog(expenseLogData) {
        const {value, date, description, paymentTypeId, categoryId} = expenseLogData

        // VALIDATIONS

        return await repository.createExpenseLog({value, date, description, paymentTypeId, categoryId})
    }

    async createCategory(categoryData) {
        return await repository.createCategory(categoryData)
    }

    async createPaymentType(paymentTypeCategory) {
        return await repository.createPaymentType(paymentTypeCategory)
    }
}

const service = new Service()
export default service