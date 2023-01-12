const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const reported_questions = sequelize.define("reported_questions", {

  question_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references : {
     model :'questionnaires',
     key :'id'
    },
  },
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'users',
     key : 'id'
    }
  },
  report_reason: {
     type: DataTypes.TEXT,
     allowNull: false
   },
   
   status: {
     type: DataTypes.INTEGER(3),
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

console.log('reported_questions inserted successfully');

