const port = 8000;

const express = require('express');

const server = express();

server.use(express.static(__dirname + '/www'));

server.listen(8000, function() {
    console.log(`Server bezi na portu ${port}...`)
});