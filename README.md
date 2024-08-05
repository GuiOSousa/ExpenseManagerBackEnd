# API REST de Orçamento Doméstico

## 1. Uso básico
### Comandos
**npm run dev**: executa o servidor back-end

**npm run seed**: limpa o banco de dados e cria **Tipos de Pagamento** e **Categorias** básicas

**npx prisma studio**: abre a interface do Prisma no navegador

### Primeiros Passos
Para fins de teste, execute os comandos na ordem: *npm run dev*, *npm run seed* e *npx prisma studio*.

## 2. Rotas
**GET /api/depesas**: Lista todas as despesas do mês atual

**POST /api/depesas**: Adiciona uma nova despesa ao banco de dados

**GET /api/despesa-id**: Pega os dados de uma despesa através do Id informado no corpo da requisição

**POST /api/category**: Adiciona uma nova categoria ao banco de dados

**POST /api/paymentType**: Adiciona um novo tipo de pagamento ao banco de dados