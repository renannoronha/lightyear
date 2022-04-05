const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const lancamentos = require('./routes/lancamentos')

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
app.use('/', (req, res, next) => {
    res.status(200).send('Lightyear API');
});

module.exports = app;

