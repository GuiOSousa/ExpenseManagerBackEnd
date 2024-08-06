# API REST de Orçamento Doméstico

## 1. Uso básico
### Comandos
**npm run dev**: executa o servidor back-end.

**npm run seed**: limpa o banco de dados e cria **Tipos de Pagamento** e **Categorias** básicas.

**npx prisma studio**: abre a interface do Prisma no navegador.

### Primeiros Passos
No arquivo **.env** adicione a linha ' DATABASE_URL="file:./dev.db" '.

Execute no terminal os comandos *npx prisma generate* e *npx prisma migrate deploy* para configurar o Prisma.

Para fins de teste, execute os comandos na ordem: *npm run dev*, *npm run seed* e *npx prisma studio*.

Alguns testes predefinidos estão disponíveis na pasta "postman". O arquivo JSON pode ser importado para o Postman como uma coleção.

## 2. Rotas
**GET /api/depesas**: Lista todas as despesas do mês atual.

**POST /api/depesas**: Adiciona uma nova despesa ao banco de dados.

**GET /api/despesa-id**: Pega os dados de uma despesa através do Id informado no corpo da requisição.

**POST /api/category**: Adiciona uma nova categoria ao banco de dados.

**POST /api/paymentType**: Adiciona um novo tipo de pagamento ao banco de dados.

## 3. Entradas de Dados
### Despesa (Expense) ###
**value**: Valor numérico não inteiro que representa a quantia em dinheiro.

**description**: String que descreve a despesa.

**date**: Data no formato "2024-12-31T23:59:59.999Z".

**paymentType**: Id do tipo de pagamento.

**category**: Id da categoria.

### Categoria (Category) ###
**name**: Nome da categoria. Não aceita repetições.

**description**: String que descreve a categoria.

### Tipo de Pagamento (Payment Type) ###
**type**: String que nomeia o tipo de pagamento. Não aceita repetições.