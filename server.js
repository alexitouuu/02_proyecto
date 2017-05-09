var http = require('http');
var fs = require('fs');
var path = require('path');
var colors = require('colors');
var mime = require('mime');
var config = require("./config/config");
var handlers = require('./internals/handlers');
var staticServer = require('./internals/static-server')
colors.setTheme(config.color_theme);

var server = http.createServer(function(req, res) {
    console.log(`> Peticion entrante ${req.url}`.data);
    var resourcePath;
    if (typeof(handlers[req.url]) == 'function') {
        handlers[req.url](req, res);
    } else {
        staticServer.server(req, res);
    }

});

server.listen(config.PORT, config.IP, function() {
    console.log(`> Server escuchando en http://${config.IP}:${config.PORT}`.info);
});