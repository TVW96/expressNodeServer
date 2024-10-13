# Express Node Js Server
## Overview

This project implements a simple web server using Express.js. The server has two main routes and includes error handling for undefined routes.

## Design Decisions

1. **Framework Choice**: I chose Express.js for its simplicity and flexibility, allowing for easy route management and middleware integration.
2. **Route Structure**: The server includes a root route (`/`) that returns a "Hello World" message and an `/about` route for additional information.
3. **Error Handling**: A 404 error handler is implemented to manage requests to undefined routes, providing a clear response for users.
4. **Port Configuration**: The server listens on a configurable port, defaulting to 3000, making it easy to deploy in different environments.

### Challenges Faced

- Setting up Express was straightforward; however, ensuring proper error handling took some adjustments to provide user-friendly feedback.
- Testing the server endpoints required careful management of environment variables to ensure it runs smoothly in various setups.

## How to Run the Application

1. **Prerequisites**: Ensure you have Node.js installed on your machine.

2. **Install Dependencies**: In your project directory, run:
   ```bash
   npm install express
# expressNodeServer
