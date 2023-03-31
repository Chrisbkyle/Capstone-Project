const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('office_chef', 'root', 'IOD-sw-221011', {
    host: 'localhost',
    dialect: 'mysql'
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