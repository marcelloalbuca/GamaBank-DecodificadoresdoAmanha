const Hapi = require("@hapi/hapi")
const swagger = require('./configs/swagger')
const routes = require('./routes/index.js')

//const env = require('./configs/env.js')

const server = async () => {
    const hapiServer = Hapi.Server({
        port: process.env.SERVER_PORT || 3000,
        host: process.env.SERVER_HOST || 'localhost'
    })

    await hapiServer.register(swagger)
    hapiServer.route(routes)

    return hapiServer
}

process.on("unhandledRejection", (err) => {
    console.log("---->  Deu ruim !")
    console.error(err)
    process.exit(1)
})

module.exports = server()
