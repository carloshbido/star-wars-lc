const axios = require('axios')

const api = axios.create({
  baseURL: 'https://swapi.dev/api'
})

module.exports = api