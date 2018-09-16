const express = require('express')
const app = express()

const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/',function(req,res){
    console.log("asdsa");
    res.sendFile(__dirname+"/index.html")
})
io.on('connection',function(socket){
    console.log("user connect")
    socket.on('chat',function(msg){
       io.emit('chat',msg)
    })
})
http.listen(2000,console.log("port open"))