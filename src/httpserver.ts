import * as http from "node:http";

const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
