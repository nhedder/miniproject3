const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class word extends Model { }
//Sequelize will create this table if it doesn't exist on startup
word.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
firstName: {
type: DataTypes.STRING, allowNull: false, required: true
},
lastName: {
type: DataTypes.STRING, allowNull: false, required: true
},
emailId: {
type: DataTypes.STRING, allowNull: false, required: true,
unique: true
},
password: {
type: DataTypes.STRING, allowNull: false, required: true
}},
{
sequelize: sequelizeInstance, modelName: 'words', //uselowercase plural format
timestamps: true, freezeTableName: true
}
)
module.exports = word;