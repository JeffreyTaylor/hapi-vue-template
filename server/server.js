const Glue = require('glue');
const Path = require('path');
const Inert = require('inert');

const manifest = {
  server: {
    port: 9011,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../_dist')
      }
    }
  },
  register: {
    plugins: [
      {
        plugin: 'Inert'
      },
      {
        plugin: './home'
      },
      {
        plugin: './users',
        routes: {
          prefix: '/users'
        }
      }
    ],
    options: {
      once: true
    }
  }
};


const options = {
  relativeTo: __dirname
};

(async function () {
  try {
    const server = await Glue.compose(manifest, options);
    await server.start();
    console.log(`server started on ${manifest.server.port}`);
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
})();