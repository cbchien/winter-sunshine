const path = require('path');

const paths = {};

// top-level directories
paths.dist       = path.resolve(__dirname, 'dist');
paths.publicPath = '/';
paths.src        = path.resolve(__dirname, 'src');

// secondary directories
paths.client = path.join(paths.src, 'client');
paths.server = path.join(paths.src, 'server');

// nested directories / files can be added here
paths.indexHtml  = path.join(paths.client, 'index.html');
paths.clientMain = path.join(paths.client, 'index.js');
paths.serverApp  = path.join(paths.server, 'index.js');

module.exports = paths;
