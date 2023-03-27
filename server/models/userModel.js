const { DataTypes, Model } = require("sequelize");
let dbConnect = require('../db/dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class users extends Model {}


users.init({
    username: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
                is: [/^(?=.{5,}$)[a-zA-Z_]*\d*$/]
            },
        primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: [/(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.*^[A-Za-z])(?=.{5,})/i]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { 
                isEmail: true,
            },
        }
}, { sequelize: sequelizeInstance, modelName: 'users', timestamps: false, freeTableName: true })
module.exports = users;