const server = require('./server')

server.then(hapi => {
	hapi.start()
	console.log('Servidor foi iniciado...', hapi.info.uri)
})