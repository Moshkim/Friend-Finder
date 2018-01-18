let path = require('path')


let moduleApp = require('../../server.js')

const PORT = 3300



moduleApp.app.get('/survey', function(req, res){
    console.log("What is going on?")
    res.sendFile(moduleApp.path.join(__dirname,'../public/', "survey.html"))
})

app.get('*', function(req, res){
    res.sendFile(moduleApp.path.join(__dirname, '../public', 'home.html'))
})
