// Import the express module
const express = require("express");
// Import the dotenv module and call the config method to load the environment variables
require("dotenv").config();

const sanitize = require('sanitize')
const cors = require("cors")

const port = process.env.PORT;

const router = require("./routes/index");
// Create webserver
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,

    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "x-access-token", // Explicitly allow your custom header
      "Content-Type",
      "Authorization",
    ],
    exposedHeaders: ["x-access-token"], // Important for browser visibility
    credentials: true,
  })
);
// Add the express.json middleware to the application
app.use(express.json());
// sanitize middleware
app.use(sanitize.middleware)

// Add the routes to the application as middleware
app.use(router);
// Start the webserver
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
// Export the webserver for use in the application
module.exports = app;
