const express = require('express');
const path = require('path');
require('dotenv').config();

// DB CONFING
const { dbConection } = require('./database/config');
dbConection();

// App de Express
const app = express();

// LECTURA Y PARSEO DEL BODY
app.use(express.json());

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// MIS RUTAS
app.use('/api/login', require('./routes/auth'));

server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);

});


