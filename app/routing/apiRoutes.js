let express = require('express')
let path = require('path')


let app = express()


app.get('/survey', function(req, res){
    res.sendFile(path.join('../public', "survey.html"))
})

app.get('/:whatever', function(req, res){
    res.sendFile(path.join('../public', 'home.html'))
})
