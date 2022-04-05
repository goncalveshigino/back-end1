const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Produtos = require('./models/products');

const server = require('http').Server(app);

require('dotenv').config();

//DB Config
require('./database/config').dbConnection();

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

//Body parser
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())




app.get('/', ( req, res) => res.send('Ola mundo!'));

app.get('/produtos', ( req, res) => {
    let produtos = Produtos.find({}, (err, produtos) => {
        if(err){
            console.log(err)
           return res.status(500).send('Erro ao consultar produtos.')
        }
        return res.render('produtos', {produtos: produtos})
    })
});

app.get('/produtos/:id', ( req, res) => {
    Produtos.findById(req.params.id, (err, produto) => {

        if(err){
            console.log(err)
           return res.status(500).send('Erro ao consultar o produto.')
        }

    Produtos.find({}, (err, produtos) => {
        if(err){
            console.log(err)
           return res.status(500).send('Erro ao consultar produtos.')
        }
        return res.render(
            'produtos', 
            {
                produtos: produtos,
                produto: produto
            })
    })
  })
});

app.post('/produtos/:id', (req,res) =>{

    Produtos.findById(req.params.id, (err, produto) => {

        if(err){
            console.log(err)
           return res.status(500).send('Erro ao consultar o produto.')
        }
    
    let { nome, vlUnit, codigoBarras } = req.body;

    produto.nome = nome;
    produto.vlUnit = vlUnit;
    produto.codigoBarras = codigoBarras;

    produto.save( err =>{
        if(err){
            return res.status(500).send("erro ao salvar o produto")
        }
        return res.redirect('/produtos')
    })
  })
})



app.post('/produtos', (req,res) =>{
    
    const { nome, vlUnit, codigoBarras } = req.body;

    let produto = new Produtos()

    produto.nome = nome;
    produto.vlUnit = vlUnit;
    produto.codigoBarras = codigoBarras;

    produto.save( err =>{
        if(err){
            return res.status(500).send("erro ao salvar o produto")
        }
        return res.redirect('/produtos')
    })
})

server.listen(process.env.PORT, () =>{
    console.log(`Rodando na porta ${ process.env.PORT}`)
 });