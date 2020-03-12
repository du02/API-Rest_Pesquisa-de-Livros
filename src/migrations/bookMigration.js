const Sequelize = require('sequelize');
const connection = require('../../config/connection');

const book = connection.define('books', {
    id_google: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
    },
    author: {
        type: Sequelize.STRING,
    },
    amoult: {
        type: Sequelize.INTEGER,
    },
    isbn01: {
        type: Sequelize.STRING,
    },
    isbn02: {
        type: Sequelize.STRING,
    }
});

book.sync({ force: true });