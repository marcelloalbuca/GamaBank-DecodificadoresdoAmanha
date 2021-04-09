const server = require('./server')
//const db = require('./infraestructure/database')

server.then(hapi => {
	hapi.start()
	console.log('servidor foi iniciado..')
})



