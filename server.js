let express = require('express')
let mysql = require('mysql')
let bodyParser = require('body-parser')
let path = require('path')


const PORT = 3300

let app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/", function(req, res) {
    console.log("Connected!")
    res.sendFile(path.join(__dirname, 'app/public', "home.html"))
})

app.get('/:whatever?/:whooo?', function(req, res){
    res.sendFile(path.join(__dirname,'app/public', 'home.html'))
})

app.get('/api/friends', function(req, res){
    console.log("What is going on?")
    res.json()
})
app.post('api/friends', function (req, res){
    
})

app.get('/survey', function(req, res){
    console.log("What is going on?")
    res.sendFile(path.join(__dirname,'app/public', "survey.html"))
})


app.listen(PORT)

//module.exports = {app,path}