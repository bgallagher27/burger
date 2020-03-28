const connection = require("./connection.js");

const orm = {
    selectAll: function() {
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
      console.log(result);
        });
    },
};