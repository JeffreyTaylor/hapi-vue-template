exports.plugin = {
  register: (server, options) => {

    server.route({
      method: 'GET',
      path: '/',
      handler: async (request, h) => {
        return {
          users: [
            {name: 'user 1'},
            {name: 'user 2'}
          ]
        };
      }
    });
  },
  pkg: require('./module.json')
};