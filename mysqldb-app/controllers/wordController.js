"use strict";
const Models = require("../models");
const getWords = (res) => {
  Models.Word.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createWords = (data, res) => {
  Models.Word.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateWord = (req, res) => {
  Models.Word.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteWord = (req, res) => {
  Models.Word.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
};

module.exports = {
  getWords,
  createWords,
  updateWord,
  deleteWord
};
