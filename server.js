import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = 8080;

//get current path
const __filename = url.pathToFileURL(import.meta.url);
const __dirname = path.dirname(__filename.pathname).split(":")[1];

const server = http.createServer(async (req, res) => {
  let filePath;
  let status = 200;

  if (req.url === "/") {
    filePath = path.join(__dirname, "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "about.html");
  } else if (req.url === "/contact-me") {
    filePath = path.join(__dirname, "contact-me.html");
  } else {
    filePath = path.join(__dirname, "404.html");
    status = 404;
  }
  const data = await fs.readFile(filePath);
  res.writeHead(status, { "Content-Type": "text/html" });
  res.write(data);
  res.end();
});

server.listen(PORT, () => console.log(`Running on ${PORT}`));
