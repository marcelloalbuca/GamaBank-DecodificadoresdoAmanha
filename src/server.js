const Hapi = require("@hapi/hapi")
const swagger = require('./configs/swagger')
const routes = require('./routes/index.js')

const server = async () => {
    const hapiServer = Hapi.Server({
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
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
