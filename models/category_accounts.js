const {Sequelize, DataTypes} = require("sequelize");

const {sequelize} = require('../config/sequelize');


const category_accounts = sequelize.define('category_accounts',{
    account_type_id :{
        type : DataTypes.INTEGER(11),
        allowNull : false,
        references : {
            model : 'account_types',
            key : 'id'
        },
    },
    category_id :{
        type : DataTypes.INTEGER(11),
        allowNull : false,
        references : {
            model : 'categories',
            key : 'id'
        },
    },
    category_id :{
        type : DataTypes.INTEGER(11),
        allowNull : false,
        defaultValue :'1'
    }
    },
    {
       timestamps: false,

});

sequelize.sync();

console.log('category_accounts inserted successfully');