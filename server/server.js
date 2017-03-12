const Glue = require('glue');

const options = {
  relativeTo: __dirname
};

Glue.compose(require('./manifest.js'), options, function (err, server) {

  server.start(function (err) {

    if (err) {
      throw err;
    }

    console.log('Server running on port', server.info.port);
  });

});
