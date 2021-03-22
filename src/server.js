//moduly
//integrovane moduly
const path = require('path');
//doinstalovane moduly
const express = require('express');

//soucasti aplikace
const server = express();

//dulezite promenne
const port = 8000;

//automaticke rozbaleni prichozich dat ve formatu JSON
server.use(express.json());

//rucne zpracovane URL
server.post('/stisk', (dotaz, odpoved) => {
    console.log(dotaz.body);
});

//server pro staticke soubory (HTML, CSS, JS, ...)
server.use(express.static(path.join(__dirname, 'www')));

//spusteni serveru
server.listen(port, () => {
    console.log(`Server bezi na portu ${port}...`)
});