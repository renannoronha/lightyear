const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const lancamentos = require('./lancamentos')

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method !== 'GET') {
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).send({});
    }
    next();
});

app.use('/lancamentos', lancamentos);

// Retorna o nome da API quando a raiz é chamada
// TODO: Retornar a documentação da API
app.use('/', (req, res, next) => {
    res.status(200).send('Lightyear API');
});

// Se não encontrar nenhum rota
// app.use((req, res, next) => {
//     const erro = new Error('Caminho não encontrado');
//     erro.status = 404;
//     next(erro);
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     return res.send({
//         erro: {
//             mensagem: error.message
//         }
//     });
// });

module.exports = app;

