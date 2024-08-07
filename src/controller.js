import {z} from 'zod'
import service from './service.js'
import { json } from 'stream/consumers'
import { tr } from 'date-fns/locale'

export class Controller {
    constructor(){}

    async getExpenseLogById(req, res) {
        const bodySchema = z.object({id: z.number("Insira um ID válido.")})
        try {
            const expenseLogData = bodySchema.parse(req.body)
            const expenseLog = await service.getExpenseLogById(expenseLogData.id)
    
            res.status(200).send({"data": expenseLog, "success": true})
        } catch(err) {
            res.status(400).send({"data": err.message, "success": false})
        }
    }

    async getMonthExpenseLog(req, res) {
        const monthExpenses = await service.getMonthExpenseLog()
        try {
            if (monthExpenses.length == 0) {
                res.status(404).send({"data": "Nenhum registro encontrado", "success": true})
                return
            }
            res.status(200).send({"data": monthExpenses, "success": true})
        } catch(err) {
            res.status(400).send({"data": err.message, "success": false})
        }
    }

    async createExpenseLog(req, res) {
        const bodySchema = z.object({
            value: z.number({required_error: "Valor da despesa necessário."}),
            date: z.string().datetime({required_error: "Data da despesa necessário."}),
            description: z.string(),
            paymentTypeId: z.number({ required_error: 'Tipo de pagamento necessário.' }),
            categoryId: z.number({required_error: "Categoria da despesa necessária."})
          })
        try {
            const expenseLogData = bodySchema.parse(req.body)
            const expenseLog = await service.createExpenseLog(expenseLogData)

            res.status(201).send({"data": expenseLog.id, "success": true})
        } catch (err) {
            res.status(400).send({"data": err.message, "success": false})
          }
    }

    async createCategory(req, res) {
        const bodySchema = z.object({
            name: z.string({required_error: "Nome da categoria necessário."}),
            description: z.string()
        })
        try {
            const categoryData = bodySchema.parse(req.body)
            const category = await service.createCategory(categoryData)

            res.status(201).send({"data": category.id, "success": true})
        } catch(err) {
            res.status(400).send({"data": err.message, "success": false})
        }
    }

    async createPaymentType(req, res) {
        const bodySchema = z.object({
            type: z.string({required_error: "Tipo de pagamento necessário."})
        })
        try {
            const paymentTypeData = bodySchema.parse(req.body)
            const paymentType = await service.createPaymentType(paymentTypeData)

            res.status(201).send({"data": paymentType.id, "success": true})
        } catch(err) {
            res.status(400).send({"data": err.message, "success": false})
        }
    }
}

const controller = new Controller()
export default controller