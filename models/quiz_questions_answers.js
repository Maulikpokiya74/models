const {Sequelize, DataTypes, DATE} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const quiz_questions_answers = sequelize.define("quiz_questions_answers", {

  
  quiz_id: {
     type: DataTypes.INTEGER(11),
     allowNull: false,
     references : {
      model :'quizzes',
      key :'id'
     },
   },
   question_id: {
     type: DataTypes.INTEGER(11),
     allowNull: false,
     references : {
      model :'questionnaires',
      key :'id'
     },
   },
   player_id: {
     type: DataTypes.INTEGER(11),
     allowNull: false,
     defaultValue :'0',
     references : {
      model :'users',
      key :'id'
     },
   },
   player_answer: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue :'0',
     comment : '1=correct,2=wrong'
   },
   
   player_answer_key: {
    type: DataTypes.STRING(16),
    allowNull : true,
  },
  player_spent_time: {
    type: DataTypes.FLOAT,
    allowNull : false,
  },
  player_time_out: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'0'
  },
  opponent_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    comment : 'Opponent Id',
    references : {
     model :'users',
     key :'id'
    },
  },
  opponent_answer: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'0',
    comment:'1=correct,2=wrong'
  },
  opponent_answer_key: {
    type: DataTypes.STRING(16),
    allowNull : true,
  },
  opponent_spent_time  : {
    type: DataTypes.FLOAT,
    allowNull : false,
  },
  opponent_time_out: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'0'
  },
  status: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'0'
  },
  status: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'1'
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

sequelize.sync().then(()=>{
  
  console.log('quiz_questions_answers inserted successfully');
});


