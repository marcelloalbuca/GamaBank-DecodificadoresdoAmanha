const hapiswagger = require('hapi-swagger');
const inert = require("@hapi/inert")
const vision = require("@hapi/vision")
 
const swagger = {
        plugin: hapiswagger,
        options: {
            info: {
                title: 'Gamabank - Grupo 2',
                description: 'Criação base para projeto de criação de um banco',
                version: '1.0'
            }
        }
    }
 
 
//array 
module.exports = [inert, vision, swagger];