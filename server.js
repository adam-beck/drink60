const PythonShell = require('python-shell');
const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 3005
});

server.register(require('inert'), err => {
  if (err) throw err;

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.file('./index.html');
    }
  });
});

server.route({
  method: 'GET',
  path: '/getSong',
  handler: (req, resp) => {
    var pythonScript = new PythonShell('app.py');
    pythonScript.on('message', track => {

      console.log(track);

      return resp(track).type('application/json').code(200);
    });
  }
});

server.start(err => {
  if (err) throw err;

  console.log('Server running at localhost:3005');
});





