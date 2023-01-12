const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const topic_regional_relevance = sequelize.define("topic_regional_relevance", {


  topic_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'topics',
     key : 'id'
    }
  },
  region_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'regions',
     key : 'id'
    }
  },

  status   :{
    type : DataTypes.INTEGER(3),
    allowNull:false,
    defaultValue:'1',
    comment :'0=delete,1=active'
  }
 
},
{
   timestamps: false,
});

sequelize.sync();

console.log('topic_regional_relevance inserted successfully');

