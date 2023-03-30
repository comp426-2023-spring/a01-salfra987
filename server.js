http = require('http');
const fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

const args = minimist(process.argv.slice(2));

const hostname = '127.0.0.1';
const port = args['port'] || 3000;

var data_var;

fs.readFile('./public/index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data_var = data;
}
);
     
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(data);
});

server.listen(port);
console.log(`Server listening on port ${port}`);


