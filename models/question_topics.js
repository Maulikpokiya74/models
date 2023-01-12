const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const question_topics = sequelize.define("question_topics", {

  
  topic_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'topics',
     key : 'id'
    }
  },
   
  
  question_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'questionnaires',
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

console.log('question_topics inserted successfully');

