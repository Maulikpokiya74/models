const {Sequelize, Model, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize');

const countries = sequelize.define("countries", {
   country_code: {
     type: DataTypes.STRING(64),
     allowNull: false,
   },
   name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  flag: {
     type: DataTypes.STRING(164),
     allowNull : true,
   },
   status : {
     type : DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "1",
     comment : '0=delete,1=active', 
    }
   
  },
  {
     timestamps: false,
});

sequelize.sync();

console.log('countries inserted successfully');

