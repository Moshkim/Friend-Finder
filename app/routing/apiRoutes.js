//let express = require('express')
let path = require('path')


let moduleApp = require('../../server.js')

const PORT = 3300



moduleApp.app.get('/api/friends', function(req, res){
    console.log("What is going on?")
    res.sendFile(moduleApp.path.join(__dirname,'../public/', "survey.html"))
})

moduleApp.app.get('*', function(req, res){
    res.sendFile(moduleApp.path.join(__dirname, '../public', 'home.html'))
})
