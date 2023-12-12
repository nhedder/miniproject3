const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Word = require("./word")
class Description extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Description.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
   definition: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    example: {
      type: DataTypes.STRING,
     
    },
    partOfSpeech: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    wordID: {
      type: DataTypes.INTEGER, allowNull: true, required: false,
      references: {
          model: Word, //reference to another model
          key: "id", //column name of the referenced model
          indexes: [{ unique: true }],
      }},
  },
  {
    sequelize: sequelizeInstance,
    modelName: "descriptions", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Description;