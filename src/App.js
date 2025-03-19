import express from 'express';
import { createProduto, readProduto } from './controllers/ProdutoController.js';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('API Funcionando');
});

//CRUD produto
app.post('/produto', createProduto);
app.get('/produto', readProduto)
app.put('/produto/:id_produto', updateProduto)
app.listen(port,()=>{
    console.log(`API Rodando na Porta ${port}`)
});