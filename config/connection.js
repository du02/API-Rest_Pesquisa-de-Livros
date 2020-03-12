require('dotenv').config();

const Sequelize = require('sequelize');

const connection = new Sequelize(
    `${process.env.NAME_BD}`, 
    `${process.env.USER_BD}`, 
    `${process.env.PASS_BD}`, 
    {
        host: `${process.env.HOST}`,
        dialect: 'mysql'
    }
);

connection.authenticate()
    .then(()=>{
        console.log('Success in connection!');
    }).catch((err)=>{
        console.log(err);
    })

module.exports = connection;