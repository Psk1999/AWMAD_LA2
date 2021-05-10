const express = require('express');
const app = express();
const hostname = 'localhost'
const port = '3000'

app.use(express.static('public'));


app.get('/', function (req,res) {
    res.send('Purva Kudre - 2018BTECS00095')
})

var b0 = function (req,res, next){
    console.log('Function 1')
    next ()
}

var b1 = function (req, res, next){
    console.log('Function 2')
    next()
}

var b2 = function (req, res){
    res.send({data: "Multicall back function usinf array"})
}

app.get('/route2', [b0, b1, b2])


app.get('/index2.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index2.html" );  
})


app.get('/bookInfo/:name', function (req, res){
    res.send('The library has the book so named - ' + req.params.name)
})

app.listen(port, hostname, () => {
    console.log('Express app listening at http://${hostname}:${port}/');
});
