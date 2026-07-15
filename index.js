const http = require('http');
const fs = require('fs');
const path = require('path');

// The port number where the server will listen for requests.
const PORT = 3000;

// Create a simple HTTP server using Node's built-in http module.
const server = http.createServer((req, res) => {
  const url = req.url.toLowerCase();

  // Route handling: decide which page to send based on the requested URL.
  if (url === '/' || url === '/home') {
    sendFile(res, 'home.html');
  } else if (url === '/about') {
    sendFile(res, 'about.html');
  } else if (url === '/contact') {
    sendFile(res, 'contact.html');
  } else {
    sendFile(res, '404.html', 404);
  }
});

// Start the server and listen on the chosen port.
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Helper function to read an HTML file and send it as the response.
function sendFile(res, fileName, statusCode = 200) {
  const filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If the file cannot be read, send a simple error message.
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Sorry, there was a server error.');
      return;
    }

    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}
