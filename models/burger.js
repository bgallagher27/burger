const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(newBurger, cb) {
        orm.insertOne(newBurger, function(res) {
            //cb(res);
        })
    },
    updateOne: function(devouredBurger, cb) {
        orm.updateOne(devouredBurger, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;