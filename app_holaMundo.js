// var express = require('express');
// var exphbs = require('express-handlerbars');

var http = require('http');

http.createServer(
    function(req, res){
      res.writeHead(200, {'Content-Type': 'text-plain'});
      res.end('Hola Mundo app HOLA MUNDO');
    }
  ).listen(3000);
  console.log('Servidor en el puerto localhost:3000');
