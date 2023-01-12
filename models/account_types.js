const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const account_types = sequelize.define("account_types", {

  
  account_type: {
     type: DataTypes.STRING,
     allowNull: false
   },
   description: {
     type: DataTypes.TEXT,
     allowNull: false
   },
   icon : {
     type: DataTypes.STRING,
     allowNull : false
   },
   status: {
     type: DataTypes.INTEGER,
     allowNull : false,
     defaultValue : "0"
   },
   created_at: {
    type: 'DATETIME',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
 },
 updated_at: {
    type: 'DATETIME',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
 },
},
{
   timestamps: false,
});

sequelize.sync();

console.log('account_types inserted successfully');

