const http = require("http");
const hostname = "127.0.0.1";
const port = 3001;
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
 
 
});

server.listen(port, hostname, () => {
  console.log(`The server is running on http://${hostname}:${port}/ `);
 
});
