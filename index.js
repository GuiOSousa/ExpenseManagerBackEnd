import express from "express";
import controller from "./src/controller.js";

const app = express()
const routes = express.Router()

app.use(express.json())

routes.get('/api/despesas', controller.getMonthExpenseLog)
routes.get('/api/despesa-id', controller.getExpenseLogById)
routes.post('/api/despesas', controller.createExpenseLog)

routes.post('/api/category', controller.createCategory)

routes.post('/api/paymentType', controller.createPaymentType)

const PORT = 4000;

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});