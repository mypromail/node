const express = require('express');
const app = express();

app.use(express.json());


const produtosRoutes = require('./routes/product_routes');


app.use(produtosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));