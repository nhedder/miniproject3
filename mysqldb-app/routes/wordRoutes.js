const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.wordController.getWords(res);
});


router.get("/init/:wordId", (req, res) => {
  Controllers.populateController.storeWord(req, res);
});

router.post("/create", (req, res) => {
  Controllers.wordController.createWords(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.wordController.updateWord(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.wordController.deleteWord(req, res);
});

module.exports = router;
