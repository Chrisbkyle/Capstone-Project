const { DataTypes, Model } = require("sequelize");
let dbConnect = require('../db/dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class recipes extends Model {}

recipes.init({
    recipe: { 
        type: DataTypes.STRING, 
        allowNull: false,
        primaryKey: true 
    },
    ingredients: { 
        type: DataTypes.TEXT, 
        allowNull: false
    },
    directions: { 
        type: DataTypes.TEXT, 
        allowNull: false
    },
    yield: { 
        type: DataTypes.STRING, 
        allowNull: true
    },   
    dish: { 
        type: DataTypes.STRING, 
        allowNull: true
    },
    station: {
        type: DataTypes.STRING, 
        allowNull: true
    }
}, {sequelize: sequelizeInstance, modelName: 'recipes', timestamps: true, freezeTableName: true })
module.exports = recipes;