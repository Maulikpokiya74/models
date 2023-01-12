const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const learning_points = sequelize.define("learning_points", {

  
  user_id: {
     type: DataTypes.INTEGER(11),
     allowNull: false,
     references:{
      model : 'users',
      key : 'id'
     }
   },
   
   lp: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
   },
   status: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue : "1"
  },

},
{
   timestamps: false,
});

sequelize.sync();

console.log('learning_points inserted successfully');

