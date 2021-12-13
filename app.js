const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('This is my sample node app')
})

app.listen(3000, function() {
    console.log('Server app 3000')
})