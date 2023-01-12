const {Sequelize,  DataTypes} = require("sequelize");

const {sequelize} = require('../config/sequelize')

const avatars =sequelize.define("avatars",{
    name : {
        type : DataTypes.STRING(164),
        allowNull : false,
    },
    avatar : {
        type : DataTypes.STRING(164),
        allowNull : false,
    },
    status : {
        type : DataTypes.INTEGER(3),
        allowNull : false,
        defaultValue : "1"
    },
     
    },
    {
       timestamps: false,

});

sequelize.sync().then(() => {
    console.log('avatars table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


module.exports = avatars;