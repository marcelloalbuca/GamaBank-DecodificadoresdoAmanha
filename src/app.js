const server = require('./server.js')

server.then(hapi => {
	console.log('servidor foi iniciado')
	hapi.start()
})