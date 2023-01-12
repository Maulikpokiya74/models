const {Sequelize, Model, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize');

const contact_us = sequelize.define("contact_us", {

  name: {
     type: DataTypes.TEXT,
     allowNull: true,
   },
   contact_no: {
     type: DataTypes.STRING(255),
     allowNull: true,
   },
   email: {
     type: DataTypes.STRING(255),
     allowNull : true,
   },
   message: {
     type: DataTypes.TEXT,
     allowNull : true,
   },
   status : {
     type : DataTypes.TINYINT(3),
     allowNull : false,
     defaultValue : "1",
     comment : '1:Pending,2:done', 
    },
    is_read : {
     type : DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "0",
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

console.log('contact_us inserted successfully');

