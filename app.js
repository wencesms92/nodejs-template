const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dashApiKey = process.env.DASH_API_KEY || 'default';

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World! This is a test for env var DASH_API_KEY: ' + dashApiKey);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});