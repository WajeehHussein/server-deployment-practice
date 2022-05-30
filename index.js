'use strict';
require('dotenv').config();
const server = require('./src/server')

let PORT = process.env.PORT;

server.start(PORT);