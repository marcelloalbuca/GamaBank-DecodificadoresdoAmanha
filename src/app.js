const server = require('./infraestructure/server.js')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000

server.then(hapi => {
	console.log(`server has been started on http://${HOST}:${PORT}`)
	hapi.start()
})