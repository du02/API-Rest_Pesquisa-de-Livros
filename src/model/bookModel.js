const { Model, DataTypes } = require('sequelize');

class Books extends Model {
            // Esse init irá receber as info. do BD no index (serve.js)
    static init(connection){
        super.init({
            id_google: DataTypes.STRING,
            title: DataTypes.STRING,
            author: DataTypes.STRING,
            amoult: DataTypes.INTEGER,
            isbn01: DataTypes.STRING,
            isbn02: DataTypes.STRING,
        }, {
            sequelize: connection,
        });
    }
}

module.exports = Books;