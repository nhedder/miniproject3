let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
    Controllers.descriptionController.getDescriptions(res);
});

router.post("/create", (req, res) => {
    Controllers.descriptionController.createDescriptions(req.body, res);
});

router.get('/user/:uid', (req, res) => { // dynamic 
    Controllers.descriptionController.getUserDescription(req, res);
})

router.put("/:id", (req, res) => {
    Controllers.descriptionController.updateDescription(req, res);
  });
  router.delete("/:id", (req, res) => {
    Controllers.descriptionController.deleteDescription(req, res);
  });

module.exports = router;