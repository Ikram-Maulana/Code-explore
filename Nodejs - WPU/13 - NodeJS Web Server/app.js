const http = require('http');
const fs = require('fs');

const port = 3000;

// Function Abstraction for renderHTML
const renderHTML = (path, res) => {
  // Read HTML file using fs
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('Page not found');
    } else {
      res.write(data);
    }
    res.end();
  });
}

// Http Create Server
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  // Get url
  const url = req.url;
  if (url === '/about') {
    renderHTML('./about.html', res);
  } else if (url === '/contact') {
    renderHTML('./contact.html', res);
  } else {
    // res.write('<h1>Hello World!</h1>');
    renderHTML('./index.html', res);
  }
});

// listen server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});