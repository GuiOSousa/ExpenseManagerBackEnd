import { prisma } from '../libs/prisma.js'

async function seed() {
    await prisma.expense.deleteMany();
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='expense'`

    await prisma.payment.deleteMany();
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='payment'`

    await prisma.category.deleteMany();
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='category'`

    const basePaymentTypes = [
        {"type": "Crédito"},
        {"type": "Débito"},
        {"type": "Pix"},
        {"type": "Dinheiro"},
    ]
    
    const baseCategories = [
        {"name": "Alimentação", "description": "Dinheiro destinado aos gastos com alimentação."},
        {"name": "Transporte", "description": "Dinheiro destinado aos gastos com transporte."},
        {"name": "Lazer", "description": "Dinheiro destinado aos gastos com lazer."}
    ]
    
    for (const type of basePaymentTypes) {
        await prisma.payment.create({
          data: type,
        })
      }
    
      for (const category of baseCategories) {
        await prisma.category.create({
          data: category,
        })
      }
}

seed()
