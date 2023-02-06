require('dotenv').config();

const Sequelize = require('sequelize');
/*
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
*/

const sequelize = 
  new Sequelize("ecommerce_db", "root", "password", {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
try {
   sequelize.authenticate();
  //console.log('Connection has been established successfully.');
} catch (error) {
  //console.error('Unable to connect to the database:', error);
}
module.exports = sequelize;
