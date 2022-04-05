const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const Produtos = require('./models/products');

const server = require('http').Server(app);

require('dotenv').config();

//DB Config
require('./database/config').dbConnection();

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');




app.get('/', ( req, res) => res.send('Ola mundo!'));

app.get('/produtos', ( req, res) => {
    let produtos = Produtos.find({}, (err, produtos) => {
        if(err){
            console.log(err)
           return res.status(500).send('Erro ao consultar produtos.')
        }
        console.log(produtos);
        return res.render('produtos', {produtos: produtos})
    })
});

server.listen(process.env.PORT, () =>{
    console.log(`Rodando na porta ${ process.env.PORT}`)
 });