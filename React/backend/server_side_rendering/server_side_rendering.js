const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  console.log("Client request URL: ", request.url);
  if (request.url === "/") {
    fs.readFile("index.html", "utf-8", function (errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(contents);
      response.end();
    });
  } else {
    response.writeHead(404);
    response.end("File not found");
  }
});

server.listen(2000);
console.log("Running localhost at port 2000.");
