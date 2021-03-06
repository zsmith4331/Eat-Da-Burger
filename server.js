// Dependencies //
const express = require("express");
const exphbs = require("express-handlebars");

// Set the port application //
const PORT = process.env.PORT || 8080;

// Create express app instance //
const app = express();

// Serve static content for the app //
app.use(express.static("public"));

// Parse application body as JSON //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars //
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes & give the server access //
const routes = require('./controllers/burgers_controller.js');

// Start server to listen to client requests //
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);