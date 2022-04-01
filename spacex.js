const axios = require("axios");
const api = axios.create({
    baseURL: "https://api.spacexdata.com/v5/launches/"
});

module.exports = api;