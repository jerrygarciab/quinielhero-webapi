'use strict';

var Hapi = require('hapi');
var config = require('../utilities/config');
var log = require('../utilities/logger');
var routes = require('../api/routes');

var server = new Hapi.Server();
server.connection({
  port: config.port,
  host: config.host
});

//Loads the routes of the API to expose
server.route(routes);

server.start(function (err) {
  if (err) {
    log.error(err);
  }

  log.info('Server running at: ' + server.info.uri);
});
