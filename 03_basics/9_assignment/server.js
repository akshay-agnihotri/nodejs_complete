const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to the Assignment Page</h1>");
    res.write('<form action="/create-user" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter new username"/>'
    );
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    const users = [];
    return fs.readFile("users.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Internal Server Error");
      }
      users.push(...data.split("\n").filter((user) => user));
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<html>");
      res.write("<head><title>Users</title></head>");
      res.write("<body>");
      res.write("<h1>List of Users</h1>");
      res.write("<ul>");
      users.forEach((user) => {
        res.write(`<li>${user}</li>`);
      });
      res.write("</ul>");
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      fs.appendFile("users.txt", username + "\n", (err) => {
        if (err) {
          console.error("Error writing to file:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Internal Server Error");
        }
        console.log(`Username: ${username}`);
        res.writeHead(302, { Location: "/users" });
        return res.end();
      });
    });
  }
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write("<html>");
  res.write("<head><title>Not Found</title></head>");
  res.write("<body>");
  res.write("<h1>Page Not Found</h1>");
  res.write("<p>The page you are looking for does not exist.</p>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
