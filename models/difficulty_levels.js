const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const difficulty_levels = sequelize.define("difficulty_levels", {

  
  name: {
     type: DataTypes.STRING(32),
     allowNull: false
   },
   
   status: {
     type: DataTypes.INTEGER,
     allowNull : false,
     defaultValue : "1"
   },
   created_at: {
    type: DataTypes.TIME,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
 }
 
},
{
   timestamps: false,
});

sequelize.sync();

console.log('difficulty_levels inserted successfully');

