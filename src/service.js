import repository from "./repository.js"
import { startOfMonth, endOfMonth } from 'date-fns'
import { InvalidIdError, DuplicateDataError } from "./errors/errors.js"

class Service {
    constructor(){}

    async getExpenseLogById(id) {
        return await repository.getExpenseLogById(id)
    }

    async getMonthExpenseLog() {
        return await repository.getExpenseLogByDate(startOfMonth(new Date()), endOfMonth(new Date()))
    }

    async createExpenseLog(expenseLogData) {
        const {value, date, description, paymentTypeId, categoryId} = expenseLogData
        if (await repository.getCategoryById(categoryId) == null || await repository.getPaymentTypeById(paymentTypeId) == null) {  
            throw new InvalidIdError
        }
        
        return await repository.createExpenseLog({value, date, description, paymentTypeId, categoryId})
    }

    async createCategory(categoryData) {
        const {name, description} = categoryData
        if (repository.getCategoryByName(name) != null) {
            throw new DuplicateDataError
        }

        return await repository.createCategory(categoryData)
    }

    async createPaymentType(paymentTypeData) {
        const {type} = paymentTypeData
        if (repository.getPaymentTypeByName(type) != null) {
            throw new DuplicateDataError
        }

        return await repository.createPaymentType(paymentTypeData)
    }
}

const service = new Service()
export default service