const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
      cb(result);
        });
    },

    insertOne: function(newBurger, cb) {
        const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)";
        connection.query(queryString, [newBurger], function(err, result) {
            if (err) throw err;
      cb(result);
        });
    },

    updateOne: function(devouredBurger, cb) {
        const queryString = "UPDATE burgers"
        queryString += "SET devoured = TRUE"
        queryString += "WHERE id = " + devouredBurger;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
      cb(result);
        });
    }
};

module.exports = orm;