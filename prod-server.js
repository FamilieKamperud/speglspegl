const express = require('express');
const serveStatic = require('serve-static');

const app = express();

app.use('/static', serveStatic(__dirname + '/dist'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(8080);
