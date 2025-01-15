const express = require('express')
const fs = require('fs')
const rotas = express.Router()

rotas.get('/',(req,res)=>{
    
    fs.readFile(__dirname+'/index.html',(erro,arquivo)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(arquivo)
        res.end()
    })

})

module.exports=rotas