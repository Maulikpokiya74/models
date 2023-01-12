const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const question_countries_relevance = sequelize.define("question_countries_relevance", {

  
  country_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'countries',
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

console.log('question_countries_relevance inserted successfully');

