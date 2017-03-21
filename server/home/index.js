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
        index: ['index.html']
      }
    }
  });

  server.ext('onPostHandler', (request, reply) => {
    // inspired by: https://github.com/hapijs/inert#customized-file-response
    // purpose: when route is not found, return index.html
    // so that vue.js can take over
    // and route the user to the right place.
    if (request.response.isBoom && request.response.output.statusCode === 404) {
      return reply.file('index.html');
    }
    return reply.continue();
  });

  next();

};

exports.register.attributes = {
  pkg: require('./module.json')
};