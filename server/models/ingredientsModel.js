const { DataTypes, Model } = require("sequelize");
let dbConnect = require('../db/dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class ingredients extends Model {}

ingredients.init({
    ingredient: { type: DataTypes.STRING, allowNull: false, required: true },
    caseSize: { type: DataTypes.STRING, allowNull: true, required: false },
    price: { type: DataTypes.STRING, allowNull: true, required: false },
    supplier: { type: DataTypes.STRING, allowNull: true, required: false },
    brand: { type: DataTypes.STRING, allowNull: true, required: false },
    uom: { type: DataTypes.STRING, allowNull, required: false }
}, {sequelize: sequelizeInstance, modelName: 'ingredients', timestamps: false, freezeTableName: true })

module.exports = ingredients;