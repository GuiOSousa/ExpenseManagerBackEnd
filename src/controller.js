import {z} from 'zod'
import service from './service.js'
import { json } from 'stream/consumers'

export class Controller {
    constructor(){}

    async getExpenseLog(req, res) {
        res.status(201).send("getExpenseLog")
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

            res.status(201).send(`Registro ${expenseLog.id} realizado com sucesso.`)

        } catch (err) {
            console.log(err)
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


            res.status(201).send(`Categoria "${category.name}" criada com sucesso com ID: ${category.id}.`)

        } catch(err) {
            console.log(err)
        }
    }

    async createPaymentType(req, res) {
        const bodySchema = z.object({
            type: z.string({required_error: "Tipo de pagamento necessário."})
        })

        try {
            const paymentTypeData = bodySchema.parse(req.body)
            const paymentType = await service.createPaymentType(paymentTypeData)


            res.status(201).send(`Tipo de pagamento "${paymentType.type}" criado com sucesso com ID: ${paymentType.id}.`)

        } catch(err) {
            console.log(err)
        }
    }
}

const controller = new Controller()
export default controller