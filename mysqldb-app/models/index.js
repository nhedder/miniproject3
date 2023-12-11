"use strict";
const Word = require("./word"); //require the model
const Description = require("./description"); //require the model
async function init() {
  await Word.sync(); //sync the model
  await Description.sync();
}
init();
module.exports = {
  Word, Description //export the model
};
