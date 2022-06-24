const { clear } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our Home Page');
  }
  if (req.url === '/about') {
    res.end('Welcome to our About Page');
  }
  res.end(`
  
  <h1> Ooops </h1>
  <p>Page Not Found</p>
  <a href="/">Back to home</a>
  `);
});

server.listen(5000);
