const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const experience_points = sequelize.define("experience_points", {

  
  user_id: {
     type: DataTypes.INTEGER(11),
     allowNull: false,
     references:{
      model : 'users',
      key : 'id'
     }
   },
   
   xp: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
   }
},
{
   timestamps: false,
});

sequelize.sync();

console.log('experience_points inserted successfully');

