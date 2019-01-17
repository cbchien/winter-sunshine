/* eslint-disable no-console, no-useless-escape */
const express = require('express');
const http = require('http');
const app = express();

const paths = require('./../../paths');
const routes = require('./routes')

// Point static path to dist
app.use(express.static(paths.dist));

app.use('/', routes);

// Get port from environment and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => {console.log(`Server Running on port ${port}`)})