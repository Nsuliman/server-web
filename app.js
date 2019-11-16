'use strict';

const express = require('express');

const server = express();

const Port = process.env.Port || 3000;

server.use(express.static('./public'));

server.get('/test',(Request,Response) => {

    Response.send('your test worked');

});

server.get('/data',(Request,Response) => {

    let friends = 
    [
        {name : "Nawal" },
        {name : "Fatima"},
        {name : "Groob" },
        {name : "Haneen"},
        {name : "Mai" }
    ]
    Response.json(friends);
});

server.listen(Port , () => console.log('Listening on port : ', Port));
