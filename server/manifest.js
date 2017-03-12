const path = require('path');

module.exports = {
  connections: [{
    port: 9011,
    routes: {
      files: {
        relativeTo: path.join(__dirname, '../_dist')
      },
      validate: {
        options: {
          abortEarly: false // https://github.com/hapijs/joi/blob/master/API.md#validatevalue-schema-options-callback
        }
      }
    }
  }],

  // https://medium.com/@dstevensio/manifests-plugins-and-schemas-organizing-your-hapi-application-68cf316730ef#.2z80zzfu2
  registrations: [
    {
      plugin: {
        register: './home'
      }
    },
    {
      plugin: {
        register: './users'
      },
      options: {
        routes: {
          prefix: '/users'
        }
      }
    }
  ]
};