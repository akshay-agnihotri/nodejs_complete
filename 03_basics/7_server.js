const http = require("http");
const routes = require("./7_routes");

const server = http.createServer(routes.handler);

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
