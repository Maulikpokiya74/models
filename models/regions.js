const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const regions = sequelize.define("regions", {

  
  name: {
    type: DataTypes.STRING(11),
    allowNull: false,
  },
   
  country_id: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
     references : {
      model :'countries',
      key : 'id'
     }
   },
 
   status: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "1",
     comment :'0=delete,1=active'
   },
 
  
});

sequelize.sync();

console.log('regions inserted successfully');

