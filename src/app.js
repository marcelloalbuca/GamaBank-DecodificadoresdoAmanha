const server = require('./infra/server.js')

server.then(hapi => {
	console.log(`server has been started on http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`)
	hapi.start()
})