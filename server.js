let express = require('express')
let mysql = require('mysql')
let bodyParser = require('body-parser')
let path = require('path')


const PORT = 3300

let app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


let connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'venmo'
})

connection.connect(function(error){
    if(error) throw error
    console.log("connected as id " + connection.threadId);
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'app', 'public', "home.html"));
})


// module.exports = {
//     express,
//     path
// }