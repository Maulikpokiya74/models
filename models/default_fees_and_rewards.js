const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const default_fees_and_rewards = sequelize.define("default_fees_and_rewards", {

  
  options: {
     type: DataTypes.STRING(32),
     allowNull: false
   },
   percentage: {
     type: DataTypes.INTEGER(3),
     allowNull: false,
     defaultValue : '0'
   },
   entry_fee : {
     type: DataTypes.INTEGER(8),
     allowNull : false,
     comment: 'amount'
   },
   win_reward  : {
     type: DataTypes.INTEGER(8),
     allowNull : false,
   },
   icon : {
     type: DataTypes.STRING(164),
     allowNull : true,
   },
   color_code : {
     type: DataTypes.STRING(16),
     allowNull : true,
   },
   game_mode : {
     type: DataTypes.STRING(32),
     allowNull : false,
     defaultValue : 'Training',
     comment: 'Training , Tournament'


   },
   status: {
     type: DataTypes.INTEGER,
     allowNull : false,
     defaultValue : "1"
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

console.log('default_fees_and_rewards inserted successfully');

