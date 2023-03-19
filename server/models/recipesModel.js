const { DataTypes, Model } = require("sequelize");
let dbConnect = require('../db/dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class recipes extends Model {}

recipes.init({
    recipe: { type: DataTypes.STRING, allowNull: false, required: true, primaryKey: true },
    ingredients: { type: DataTypes.TEXT, allowNull: false, required: true },
    directions: { type: DataTypes.TEXT, allowNull: false, required: true },
    yield: { type: DataTypes.STRING, allowNull: true, required: false },
    dish: { type: DataTypes.STRING, allowNull: false, required: true },
    station: {type: DataTypes.STRING, allowNull: false, required: true }
}, {sequelize: sequelizeInstance, modelName: 'recipes', timestamps: false, freezeTableName: true })

module.exports = recipes;