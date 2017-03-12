exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply({
        users: [
          { name: 'user 1'},
          { name: 'user 2'}
        ]
      })
    }
  });

  next();

};

exports.register.attributes = {
  pkg: require('./module.json')
};