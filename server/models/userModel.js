const { DataTypes, Model } = require("sequelize");
let dbConnect = require('../db/dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class users extends Model {}

users.init({
    username: { type: DataTypes.STRING, allowNull: false, required: true },
    email: { type: DataTypes.STRING, allowNull: false, required: true, primaryKey: true },
    password: { type: DataTypes.STRING, allowNull: false, required: true },
    fName: { type: DataTypes.STRING, allowNull: true, required: false },
    lName: { type: DataTypes.STRING, allowNull: true, required: false },
    restaurant: { type: DataTypes.STRING, allowNull: true, required: false }
}, {sequelize: sequelizeInstance, modelName: 'users', timestamps: false, freeTableName: true })

module.exports = users;