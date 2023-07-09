const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(   
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {  
        host: process.env.DB_HOST || db,
        dialect: 'mysql',
        port: process.env.DB_PORT
});


const connectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    Sequelize: sequelize,
    connectMysql
} 