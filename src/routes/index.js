const Joi = require('joi')
const {status} = require('../api/controllers/app.controller')
const authController = require('../api/controllers/auth.controller')
const {LoginRequestDTO,LoginResponseDTO} = require('../api/models/dto/auth.dto')

const root = ({
     method: 'GET', 
    path: "/", 
    handler: status,
    options:{
        tags: ['api'], //tenho que ter pelo menos essa tag
        description: 'Verificação do status da aplicação', 
        notes: 'Pode ser utilizado para ver o status da aplicação'
    }
})

const login  = ({
    method: 'POST', 
   path: "/", 
   handler: authController.login,
   options:{
    tags: ['api', 'login'],
    description: 'Rota para autenticação', 
    notes: 'Anotações da rota...',
    validate:{
        payload: LoginRequestDTO
    }, 
    response:{
        status:{
            200:LoginResponseDTO,
            400:Joi.any() //retorna qualquer coisa 
        }
    }  
   }
})
 
module.exports = [ root, login ]
