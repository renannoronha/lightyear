const express = require('express');
const router = express.Router();
const api = require('./spacex');

function mapLaunchData(data) {
    return {
        id: data.id,
        nome: data.name,
        detalhes: data.details,
        data_lancamento: data.date_utc,
        sucesso: data.success,
        transmissao: data.links.webcast,
        transmissao_id: data.links.youtube_id,
        imagens: data.links.flickr.original,
        patch: data.links.patch,
        numero_voo: data.flitgh_number,

    };
}

// Retorna o próximo lançamento da SpaceX
router.get('/proximo', async (req, res, next) => {
    const { data } = await api.get('next/');
    res.status(200).send(mapLaunchData(data));
});

// Retorna os próximos lançamentos da SpaceX
router.get('/proximos', async (req, res, next) => {
    const { data } = await api.get('upcoming/');
    res.status(200).send(data.map(mapLaunchData));
});

// Retorna o último lançamento da SpaceX
router.get('/ultimo', async (req, res, next) => {
    const { data } = await api.get('latest/');
    res.status(200).send(mapLaunchData(data));
});

// Retorna os lançamentos passados da SpaceX
router.get('/passados', async (req, res, next) => {
    const { data } = await api.get('past/');
    res.status(200).send(data.map(mapLaunchData));
});

module.exports = router;

