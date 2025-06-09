const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `<html><head></head><body><form action="/message" method="post"><input type="text" name="message" /><button type="submit">submit</button></form></body></html>`
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1]; // Extract the message from the body
      
      // fs.writeFileSync("message.txt", message);
      // res.statusCode = 302; // Redirect status code
      // res.setHeader("Location", "/");
      // res.end();

      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
          res.writeHead(500, { "Content-Type": "text/html" });
          res.write("<html><head></head><body><h1>Internal Server Error</h1></body></html>");
          return res.end();
        }
        res.statusCode = 302; // Redirect status code
        res.setHeader("Location", "/");
        res.end();
      });
    });
    
  }
  res.writeHead(404, { "Content-Type": "html" });
  res.write("<html><head></head><body><h1>Page not found</h1></body></html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
