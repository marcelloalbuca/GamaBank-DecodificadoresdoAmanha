const server = require('./server.js')

const env = require('./configs/env.js')

const HOST = env.server.SERVER_HOST || 'localhost'
const PORT = env.server.SERVER_PORT

server.then(hapi => {
	console.log(`server has been started on http://${HOST}:${PORT}`)
	hapi.start()
})