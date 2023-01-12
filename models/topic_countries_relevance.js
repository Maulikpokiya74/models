const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const topic_countries_relevance = sequelize.define("topic_countries_relevance", {

  country_id: {
    type: DataTypes.INTEGER(11),
    allowNull : false,
    references : {
     model :'countries',
     key : 'id'
    }
  },

  topic_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'topics',
     key : 'id'
    }
  },
   
   status: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
   },
},
{
   timestamps: false,
});

sequelize.sync();

console.log('topic_countries_relevance inserted successfully');

