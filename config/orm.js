const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
      cb(result);
        });
    },

    insertOne: function(newBurger, cb) {
        let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${newBurger}", FALSE)`
        // queryString += "(";
        // queryString += newBurger;
        // queryString += ")";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            };
      cb(result);
        });
    },

    updateOne: function(devouredBurger, cb) {
        let queryString = "UPDATE burgers ";
        queryString += "SET devoured = " + true;
        queryString += " WHERE id = " + devouredBurger;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
      cb(result);
        });
    }
};

module.exports = orm;