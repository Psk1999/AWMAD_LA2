const express = require('express');
const app = express();
const hostname = 'localhost'
const port = 8080;

// Setting up the public directory
app.use(express.static(__dirname+'/public'));




app.listen(port, () => console.log(`listening on port ${port}!`));

