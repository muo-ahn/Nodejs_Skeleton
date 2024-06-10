// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port to run the server on
const port = 3000;

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for /about
app.get('/about', (req, res) => {
  res.send('About us');
});

// Define a route for /contact
app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  res.send(`Thank you, ${name}. We have received your message: "${message}"`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
