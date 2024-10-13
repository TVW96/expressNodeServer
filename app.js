// app.js

// Add your code here
// app.js

import express from 'express';

const app = express();

// Route handler for the root path (/)
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route handler for the /about path
app.get('/about', (req, res) => {
    res.send('About page');
});

// 404 error handler for undefined routes
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Export the app instance for use in server.js
export default app;
