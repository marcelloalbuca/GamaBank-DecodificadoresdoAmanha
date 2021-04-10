
const server = require('./server')

server.then(hapi => {
	hapi.start()
	console.log('servidor foi iniciado..', hapi.info.uri)
})

