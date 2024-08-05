import express from "express";
import controller from "./src/controller.js";

const app = express()
const routes = express.Router()

app.use(express.json())

routes.get('/despesas', controller.getExpenseLog)
routes.post('/despesas', controller.createExpenseLog)

routes.post('/category', controller.createCategory)

routes.post('/paymentType', controller.createPaymentType)

routes.get('/test', async (req, res) => {
    res.status(201).send("Teste de rota 1")
})

routes.get('/', async (req, res) => {
    res.status(201).send("Teste de rota 2")
})

const PORT = 4000;

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});