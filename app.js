const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000

// importando o arquivo rout.js
const rotas = require('./rout.js')
app.use('/',rotas)
app.listen(PORT,()=>console.log('SERVIDOR ON...'))