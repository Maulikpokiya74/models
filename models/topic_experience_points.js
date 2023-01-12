const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const topic_experience_points = sequelize.define("topic_experience_points", {


  topic_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'topics',
     key : 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'users',
     key : 'id'
    }
  },

  xp :{
    type : DataTypes.INTEGER(11),
    allowNull:false,
    defaultValue:'0'
  },
  created_at: {
    type: 'DATETIME',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
 },
   
 
},
{
   timestamps: false,
});

sequelize.sync();

console.log('topic_experience_points inserted successfully');

