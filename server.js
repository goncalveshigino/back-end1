const express = require('express');
const app = express();

const server = require('http').Server(app);

require('dotenv').config();

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.get('/', ( req, res) => res.send('Ola mundo!'));

app.get('/produtos', ( req, res) => {
    res.render('produtos', {title: 'Lista de Produtos'})
});

server.listen(process.env.PORT, () =>{
    console.log(`Rodando na porta ${ process.env.PORT}`)
 });