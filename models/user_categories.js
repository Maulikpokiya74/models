const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const user_categories = sequelize.define("user_categories", {


  category_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'categories',
     key : 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'users',
     key : 'id'
    }
  },
  
  status   :{
    type : DataTypes.INTEGER(3),
    allowNull:false,
    defaultValue:'1'
  },
  
 
},
{
   timestamps: false,
});

sequelize.sync();

console.log('user_categories inserted successfully');

