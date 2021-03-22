//moduly
//integrovane moduly
const path = require('path');
//doinstalovane moduly
const express = require('express');

//soucasti aplikace
const server = express();

//dulezite promenne
const port = 8000;

//server pro staticke soubory (HTML, CSS, JS, ...)
server.use(express.static(path.join(__dirname, 'www')));

//spusteni serveru
server.listen(8000, function() {
    console.log(`Server bezi na portu ${port}...`)
});