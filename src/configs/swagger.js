const inert = require("@hapi/inert");
const vision = require("@hapi/vision");
const hapiswagger = require('hapi-swagger')


const swagger = {
    plugin: hapiswagger,
    options: {
      info: {
        title: 'Gamabank - Grupo Decodificadores do Amanhã',
        description: 'Projeto desenvolvido durente o curso de Node.js - Accenture / Gama Academy',
        version: '1.0'
      }
    }
  }

module.exports = [inert, vision, swagger]

