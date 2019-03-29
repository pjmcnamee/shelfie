const express = require('express')
const { json } = require('body-parser')
require('dotenv').config()
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const controller = require('./controller')

const app = express()

app.use(json())

massive(CONNECTION_STRING).then(db => {
	app.set('db', db)
	console.log('DB Set!')
})


app.get('/api/products', controller.getAll)
app.post('/api/products', controller.create)
app.delete('/api/products/:id', controller.delete)
app.put('/api/products/:id', controller.update)







app.listen(SERVER_PORT, () => console.log(`🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠🛠 ${SERVER_PORT}`))