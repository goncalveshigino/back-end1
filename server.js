const express = require('express');
const app = express();
const port = 3000;

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.get('/', ( req, res) => res.send('Ola mundo!'));

app.get('/produtos', ( req, res) => {
    res.render('produtos', {title: 'Lista de Produtos'})
});

app.listen(port, () => console.log(`Aplicacao rodando na porta ${port}.`))