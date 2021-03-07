// Import MySQL connection //
const connection = require("./connection.js");


const orm = {

    selectAll(table, callback) {
        const queryString = "SELECT * FROM ??";        
        connection.query(
            queryString,
            [table],
            (error, response) => {
                if (error) throw error;
                callback(response);
            }
        );
    },

    insertOne(table, burgerName, callback) {
        const queryString = "INSERT INTO ?? SET ?";
        connection.query(
            queryString,
            [table, burgerName],
            (error, response) => {
                if (error) throw error;
                callback(response);
            }
        )
    },

    updateOne(table, devoured, columns, values, callback) {
        const queryString = "UPDATE ?? SET ? WHERE ?? = ?";
        connection.query(
            queryString,
            [table, devoured, columns, values, callback],
            (error, response) => {
                if(error) throw error;
                callback(response);
            }
        );
    }

};

// Export the orm object for the model (burger.js) //
module.exports = orm;