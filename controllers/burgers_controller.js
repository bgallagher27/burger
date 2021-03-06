const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        req.body.burger_name, 
    ], function(result) {
        res.json(result)
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = req.params.id;
    burger.updateOne(condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          };      
    });
});

module.exports = router;