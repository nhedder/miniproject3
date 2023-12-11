let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
    Controllers.descriptionController.getDescriptions(res);
});

router.post("/create", (req, res) => {
    Controllers.descriptionController.createDescription(req.body, res);
});

router.get('/user/:uid', (req, res) => { // dynamic 
    Controllers.descriptionController.getUserDescriptions(req, res);
})

module.exports = router;