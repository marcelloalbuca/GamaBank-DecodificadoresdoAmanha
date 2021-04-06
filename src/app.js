const server = require('./server.js')
const db = require('./infraestructure/database')

server.then(hapi => {
	hapi.start()
	console.log('servidor foi iniciado..')
})

db.connect(() => {
	console.log('database conectado')
})

