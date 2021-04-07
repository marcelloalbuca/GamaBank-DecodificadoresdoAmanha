const Hapi = require("@hapi/hapi")
const routes = require("./src/routes/index")

// Documentação com swagger
const swagger = require('./src/configs/swagger')
const env = require('./src/configs/env.js')

const server = async () => {

    const hapiServer = Hapi.Server({
        port: env.server.port || 3000,
        host: env.server.host || 'localhost'
    })

    console.log(env.server.port)
    console.log(env.server.host)

    //REGISTRANDO SWAGGER
    await hapiServer.register(swagger)
    //Usando as rotas
    hapiServer.route(routes)
    return hapiServer

}

process.on("unhandledRejection", (err) => {
    console.log("---->  Deu ruim !")
    console.error(err)
    process.exit(1)
})

module.exports = server()