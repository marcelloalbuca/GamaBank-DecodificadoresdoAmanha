const Hapi = require("@hapi/hapi")

const routes = require('./routes/index.js')

const env = require('./configs/env.js')

const server = async () => {
    const hapiServer = Hapi.Server({
        port: process.env.PORT || 3000,
        host: rocess.env.HOST || 'localhost'
    })

    hapiServer.route(routes)

    return hapiServer
}

process.on("unhandledRejection", (err) => {
    console.log("---->  Deu ruim !")
    console.error(err)
    process.exit(1)
})

module.exports = server()
