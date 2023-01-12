const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const questionnaires = sequelize.define("questionnaires", {

  
  question: {
     type: DataTypes.TEXT,
     allowNull: false
   },
   correct_answer: {
     type: DataTypes.STRING(164),
     allowNull : true,
   },
   wrong_answer_1: {
     type: DataTypes.STRING(164),
     allowNull : false,
   },
   wrong_answer_2: {
    type: DataTypes.STRING(164),
     allowNull : false,
   },
   wrong_answer_3: {
    type: DataTypes.STRING(164),
     allowNull : false,
   },
   difficulty_level_id: {
     type: DataTypes.INTEGER(11),
     allowNull : true,
     comment : "General Knowledge / Specialized Knowledge",
     references : {
      model :'difficulty_levels',
        key : 'id'
     }
    },
    regional_relevance: {
      type: DataTypes.STRING(16),
      allowNull : false,
      defaultValue : 'Global',
      comment : "Global,Local"

   },
   time_for_question: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
     defaultValue : "20"
    },
    time_for_answer: {
      type: DataTypes.INTEGER(11),
      allowNull : false,
      defaultValue : "10"
    },
    total_time: {
      type: DataTypes.INTEGER(11),
      allowNull : false,
      defaultValue : "0"
    },
    is_question_image: {
      type: DataTypes.INTEGER(3),
      allowNull : false,
      defaultValue : "1",
     comment : '0=Off,1=On'
   },
   question_image: {
     type: DataTypes.STRING(164),
     allowNull : true,
   },
   created_by: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
     defaultValue : "1",
     comment : 'admin id'
   },
   status: {
     type: DataTypes.INTEGER(3),
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

sequelize.sync().then(()=>{
  console.log('questionnaires inserted successfully');
});


