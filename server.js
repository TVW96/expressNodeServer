// server.js

// Add your code here
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

//. route handler for root path
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//  route handler for about page
app.get('/about', (req, res) => {
    res.send('About page')
})

// 404 error handler for undefined routes
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

//. start the server
app.listen(port, () => {
    console.log(`Listengin on port ${port}`);
});

// Do not delete the following line of code
export default server;