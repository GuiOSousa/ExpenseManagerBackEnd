import { prisma } from './libs/prisma.js'

export class Repository {
    constructor(){}

    async getExpenseLogById(logId) {
        return await prisma.expense.findFirstOrThrow({
            where: {id: logId}
        })
    }

    async getExpenseLogByDate(start, end) {
        return await prisma.expense.findMany({
            where: {
                date: {
                    gte: start,
                    lte: end
                }
            }
        })
    }
    
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

    async getCategoryById(categoryId){
        return await prisma.category.findFirst({
            where: {
                id: categoryId
            }
        })
    }

    async getCategoryByName(categoryName){
        return await prisma.category.findFirst({
            where: {
                name: categoryName
            }
        })
    }

    async createPaymentType(paymentTypeCategory){
        return await prisma.payment.create({
            data: paymentTypeCategory
        })
    }

    async getPaymentTypeById(paymentTypeId){
        return await prisma.payment.findFirst({
            where: {
                id: paymentTypeId
            }
        })
    }

    async getPaymentTypeByName(paymentTypeName){
        return await prisma.payment.findFirst({
            where: {
                type: paymentTypeName
            }
        })
    }
}

const repository = new Repository()
export default repository