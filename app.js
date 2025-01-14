const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000
//Pegando o FS
const fs = require('fs')
app.get('/',(req,res)=>{
    fs.readFile('index.html',(erro, arquivo)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(arquivo)
        res.end()
    })
    

})
app.listen(PORT,()=>console.log('SERVIDOR ON...'))