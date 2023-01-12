const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const training_match_token = sequelize.define("training_match_token", {


  

  options :{
    type : DataTypes.STRING(32),
    allowNull:false,
  },
  percentage :{
    type : DataTypes.INTEGER(3),
    allowNull:false,
    defaultValue:'0'
  },
  entry_fee :{
    type : DataTypes.INTEGER(8),
    allowNull:false,
  },
  win_reward :{
    type : DataTypes.INTEGER(8),
    allowNull:false,
  },
  comments :{
    type : DataTypes.STRING(164),
    allowNull:true,
  },
  icon :{
    type : DataTypes.STRING(164)  ,
    allowNull:true,
  },
  color_code :{
    type : DataTypes.STRING(16),
    allowNull:true,
  },
  is_free :{
    type : DataTypes.INTEGER(3),
    allowNull:false,
    defaultValue:'0'
  },
  sort :{
    type : DataTypes.INTEGER(3),
    allowNull:false,
    defaultValue:'0'
  },
  
  status   :{
    type : DataTypes.INTEGER(3),
    allowNull:false,
    defaultValue:'1'
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

console.log('training_match_token inserted successfully');

