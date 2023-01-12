const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const topics = sequelize.define("topics", {

  
  created_by: {
     type: DataTypes.INTEGER(11),
     allowNull: false,
     comment : 'Admin ID'
   },
   
   name: {
     type: DataTypes.STRING(164),
     allowNull : false,
   },
   description: {
     type: DataTypes.TEXT,
     allowNull : false,
   },
   access: {
     type: DataTypes.STRING(16),
     allowNull : false,
     defaultValue : "Open",
     comment: "Open,Close"
    },
    access_code: {
      type: DataTypes.STRING(32),
      allowNull : true,
    },
    regional_relevance: {
      type: DataTypes.STRING(16),
      allowNull : false,
      defaultValue : "Global",
     comment : "Global,Local"
   },
   color_code: {
     type: DataTypes.STRING(16),
     allowNull : false,
   },
   search_tags: {
     type: DataTypes.TEXT,
     allowNull : true,
   },
   icon: {
     type: DataTypes.STRING(164),
     allowNull : false,
   },
   status: {
     type: DataTypes.INTEGER(4),
     allowNull : false,
     defaultValue : '1'
   },
   game_mode: {
     type: DataTypes.STRING(16),
     allowNull : false,
     defaultValue : 'Training',
     comment :'Training,Tournament'
   },
   match_format: {
     type: DataTypes.STRING(16),
     allowNull : false,
     defaultValue : 'Blitz',
     comment :'Blitz,Classic'
   },
   number_of_questions: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : '7'
   },
   time_for_question: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "20",
     comment :'in second'
   },
   learning_point: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "1"
   },
   experience_point: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "0"
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
  
  console.log('topics inserted successfully');
});


