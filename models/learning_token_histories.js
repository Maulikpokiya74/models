const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const learning_token_histories = sequelize.define("learning_token_histories", {

  
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'users',
     key : 'id'
    }
  },
   
  learning_token: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
     defaultValue : "0"
   },
 
   status: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "1",
     comment :'1=added,2=deduct'
   },
 
   reason_for: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     comment : '1=singUp,2=game'
   },
   quiz_id: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    references:{
     model : 'quizzes',
     key : 'id'
    }
  },
  created_at: {
    type:'DATETIME',
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

console.log('learning_token_histories inserted successfully');

