import { prisma } from './libs/prisma.js'

class Repository {
    constructor(){}

    async createExpenseLog(expenseLogData){
        return await prisma.expense.create({
            data: expenseLogData
        })
    }

    async createCategory(categoryData){
        return await prisma.category.create({
            data: categoryData
        })
    }

    async createPaymentType(paymentTypeCategory){
        return await prisma.payment.create({
            data: paymentTypeCategory
        })
    }
}

const repository = new Repository()
export default repository