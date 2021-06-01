var server = require('pushstate-server');

server.start({
    port: 5050,
    directory: './build'
});
