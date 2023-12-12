"use strict";
const axios = require("axios");
const Models = require("../models");
const { Op } = require("sequelize");
const Controllers = require("../controllers");

const storeWord = async (req, res) => {
  try {
    const word = req.params.wordId;

    let response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    const words = response.data;
    // const words = [{make: 'ford', id: 1}, {make: 'ferrari', id: 2}, {make: 'chrysler', id: 3}]
    // console.log(words[0].meanings[0].definitions[0].example)
    // console.log(words[0].meanings[0].definitions[0].definition)
    // for(let word of words) {

    for (let word of words) {
        for (let meaning of word.meanings){
      const formatWords = {
        word: word.word,
        synonyms: meaning.synonyms,
      };

      let [newWord] = await Models.Word.findOrCreate({
        where: { word: word.word },
        defaults: formatWords,
      });
      // let wordId;
      //         Models.Word.findAll({where:{word:word}})
      //         .then(function (data) {
      //         //   res.send({ result: 200, data: data });
      //     //    wordId = data.length
      //     console.log({data})
      //         })
      //         .catch((err) => {
      //           throw err;
      //         });
      //    let [getWords] = await Controllers.wordController.getWords(res);

      // console.log(getWords)
      const formatDesc = {
        definition: meaning.definitions[0].definition,

        example: meaning.definitions[0].example,

        partOfSpeech: meaning.partOfSpeech,

        wordID: newWord.id,
      };

      let [newDescription] = await Models.Description.findOrCreate({
        where: { definition: meaning.definitions[0].definition },
        defaults: formatDesc,
      });
    }}
    res.send ('fetchedRoutes')
  } catch (err) {
    console.log(err.message);
    res.send (err.message);
    
  }
  
};

module.exports = {
  storeWord,
};
