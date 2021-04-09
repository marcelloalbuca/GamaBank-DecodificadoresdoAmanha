const Hapi = require("@hapi/hapi")
const routes = require('./routes/index');
const extratos = require('./routes/extrato_bancario')
const swagger = require('./configs/swagger')
require('dotenv/config')

// const env = require('./configs/env.js')

console.log(process.env.SERVER_PORT)
console.log(process.env.SERVER_HOST)

const server = async () => {
    const hapiServer = Hapi.Server({
        port: process.env.SERVER_PORT || 3000,
        host: process.env.SERVER_HOST || 'localhost'
    })
    await hapiServer.register(swagger)
    hapiServer.routes(routes, extratos)
    return hapiServer
}

process.on("unhandledRejection", (err) => {
    console.log("---->  Deu ruim !")
    console.error(err)
    process.exit(1)
})

module.exports = server()
