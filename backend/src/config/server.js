const port = 3003

// Middleware que vai estar dentor da cadeia de tratamento de uma requisicao
// Faz o parse no corpo da requisicao para entregar pronto para nós.
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
}) 
