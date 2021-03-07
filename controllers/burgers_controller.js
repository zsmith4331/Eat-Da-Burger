// Dependencies //
const express = require("express");
const router = express.Router();

// Import the model (burger.js) for database functions //
const burger = require("../models/burger.js");

// Routes //
router.get("/", (request, response) => {
  burger.selectAll(results => {
    response.render("index", { burgers: results });
  });
});

  router.post("/api/burgers", (request, response) => {
    burger.insertOne({ burger_name: request.body.burger_name }, results => {
        if (results.affectedRows === 0) {
            // If no rows changed then 404 //
            return response.status(404).end();
          }
          response.status(200).end();
    });
  });

  router.put("/api/burgers/:id", (request, response) => {
      burger.updateOne(request.body, request.params.id, results => {
        if (results.affectedRows === 0) {
            // If no rows changed then 404 //
            return response.status(404).end();
          }
          response.status(200).end();
      });
  });

  // Export routes for server.js //
  module.exports = router;