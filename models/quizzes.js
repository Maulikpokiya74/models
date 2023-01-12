const {Sequelize, DataTypes, DATE} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const quizzes = sequelize.define("quizzes", {

  
  player_id: {
     type: DataTypes.INTEGER(11),
     allowNull: false,
     comment : 'Requested by',
     references : {
      model :'users',
      key :'id'
     },
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
   topic_id: {
     type: DataTypes.INTEGER(11),
     allowNull: false,
     references : {
      model :'topics',
      key :'id'
     },
   },
   request_status: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue :'1',
     comment : '1=Request, 2 =accept,3=reject by opponet, 4=auto reject'
   },
   request_time: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
   },
   winner_id: {
    type: DataTypes.INTEGER(11),
    allowNull : false,
    defaultValue:'0'
  },
  is_draw: {
    type: DataTypes.INTEGER(3),
    defaultValue:'0'
  },
  spent_learning_token: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'5'
  },
  play_by_player: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'0',
    comment:'1=played'
  },
  done_by_player: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'0'
  },
  play_by_opponent  : {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'0',
    comment:'1=played'
  },
  done_by_opponent: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue:'0'
  },
  is_timer_on: {
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
  
  console.log('quizzes inserted successfully');
});


