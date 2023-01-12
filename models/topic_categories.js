const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const topic_categories = sequelize.define("topic_categories", {

  
  topic_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'topics',
     key : 'id'
    }
  },
  category_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'categories',
     key : 'id'
    }
  },
   
   status: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "1",
     Comment : '0=delete,1=active'
   },
},
{
   timestamps: false,
});

sequelize.sync();

console.log('topic_categories inserted successfully');

