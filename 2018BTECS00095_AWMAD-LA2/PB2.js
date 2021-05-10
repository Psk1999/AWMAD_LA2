const express = require('express');
const app = express();
const hostname = 'localhost'
const port = '3050'


app.use(Express.static(__dirname+'/public'));



app.get('/', function (req,res) {
    res.send('This is problem statement 2 for the AWMAD LA2')
})

app.get('/bio', function (req, res) {  
    res.sendFile( __dirname + "/" + "bio.html" );  
 })

 app.listen(port, hostname, () => {
    console.log('Express app listening at http://${hostname}:${port}/');
});
