const server = require('./server.js')
const database = require('./infraestructure/database')

server.then(hapi => {
	hapi.start()
	console.log('servidor foi iniciado..')
})

database.connect(() => {
	console.log('database conectado')
})