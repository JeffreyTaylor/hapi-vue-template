const Inert = require('inert');

exports.register = function (server, options, next) {

  server.register(Inert);

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('index.html');
    }
  });

  next();

};

exports.register.attributes = {
  pkg: require('./module.json')
};