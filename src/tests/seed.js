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
        {"name": "Pagamento de Terceirizados", "description": "Pagamento realizado aos prestadores de serviço."},
        {"name": "Pagamento de Terceirizados", "description": "Pagamento realizado aos prestadores de serviço."},
        {"name": "Pagamento de Terceirizados", "description": "Pagamento realizado aos prestadores de serviço."}
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
