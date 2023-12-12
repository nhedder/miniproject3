const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Word extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Word.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
word: {
type: DataTypes.STRING, allowNull: false, required: true
},
synonyms: {
type: DataTypes.JSON, allowNull: false, required: true
}},
{
sequelize: sequelizeInstance, modelName: 'words', //uselowercase plural format
timestamps: true, freezeTableName: true
}
)
module.exports = Word;