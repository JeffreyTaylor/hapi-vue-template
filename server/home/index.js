exports.plugin = {
  register: (server, options) => {

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

    server.ext('onPostHandler', (request, h) => {
      // inspired by: https://github.com/hapijs/inert#customized-file-response
      // purpose: when route is not found, return index.html
      // so that vue.js can take over
      // and route the user to the right place.
      if (request.response.isBoom && request.response.output.statusCode === 404) {
        return h.file('index.html').code(404);
      }
      return h.continue;
    });
  },
  pkg: require('./module.json')
};