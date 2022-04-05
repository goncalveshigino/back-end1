
const { Schema, model } = require('mongoose');


const ProdutosSchema = Schema({
    nome: {
        type: String,
        required: true
    },
    vlUnit: Number,
    codigoBarras: String
});

module.exports = model('Produtos', ProdutosSchema);