const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const experience_points_histories = sequelize.define("experience_points_histories", {

  
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'users',
     key : 'id'
    }
  },
   
   status: {
     type: DataTypes.INTEGER,
     allowNull : false,
     defaultValue : "1"
   },
 
},
{
   timestamps: false,
});

sequelize.sync();

console.log('experience_points_histories inserted successfully');

