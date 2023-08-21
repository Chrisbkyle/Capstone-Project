const { Sequelize } = require('sequelize');
require('dotenv').config();

//
//       KEEP THIS INTACT  ------------------------------------------------------- 
// 
//      DB Connect for deployment
//
const sequelize = new Sequelize(   
    process.env.DB_NAME || 'office_chef', 
    process.env.DB_USER|| 'root', 
    process.env.DB_PASSWORD || 'pass', 
    {  
        host: process.env.DB_HOST || db,
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306
});
//
//       KEEP THIS INTACT --------------------------------------------------------  
// 
//      DB Connect locally
//
// const sequelize = new Sequelize('office_chef', 'root', 'IOD-sw-221011', 
//     {  
//         host: 'localhost', 
//         dialect: 'mysql',
//         port: 3306
// });
//
//       KEEP THIS INTACT  -------------------------------------------------------                   
//


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