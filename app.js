const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.end('Hello from CI/CD demo\n');
});
server.listen(port);
