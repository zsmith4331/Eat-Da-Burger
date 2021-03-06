// Import the ORM //
const orm = require('../config/orm.js');

const burger = {

  selctAll(callback) 
  {
    orm.selectAll("burgers", (response) => callback(response));
  },
  insertOne(burgerName, callback) 
  {
    orm.create("burgers", burgerName, (response) => callback(response));
  },
  updateOne(devoured, values, callback) 
  {
    orm.update("burgers", devoured, "id", values, (response) => callback(response));
  }
  
};

// Export the database functions for the controller (burgers_controller.js) //
module.exports = burger;