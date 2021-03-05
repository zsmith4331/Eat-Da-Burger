// Set up MySQL connection //
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // Add your MySQL password here //
  password: "Pathfinder#15",
  database: "burgers_db",
});

// Make connection //
connection.connect((error) => {
  if (error) {
    console.error(`error connecting: ${error.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use //
module.exports = connection;
