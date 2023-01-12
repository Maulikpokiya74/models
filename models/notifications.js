const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const notifications = sequelize.define("notifications", {

  quiz_id: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    references:{
     model : 'quizzes',
     key : 'id'
    }
  },
  receiver_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'users',
     key : 'id'
    }
  },
  receiver_title: {
     type: DataTypes.TEXT,
     allowNull: true
   },
   
   receiver_body: {
     type: DataTypes.TEXT,
     allowNull : true,
   },
   receiver_status: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue :'0',
     comment : '1=Withdrew\r\n2=Requested\r\n3=Play\r\n4=Waiting\r\n5=You decline\r\n6=Opponent decline\r\n7=You withdrawn\r\n8=Opponent withdrawn\r\n9=You Win\r\n10=You loss\r\n11=Expired'
   },
   sender_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references:{
     model : 'users',
     key : 'id'
    }
  },
  sender_title: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  
  sender_body: {
    type: DataTypes.TEXT,
    allowNull : true,
  },
  sender_status: {
    type: DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue :'0',
    comment : '1=Withdrew\r\n2=Requested\r\n3=Play\r\n4=Waiting\r\n5=You decline\r\n6=Opponent decline\r\n7=You withdrawn\r\n8=Opponent withdrawn\r\n9=You Win\r\n10=You loss\r\n11=Expired'
  },
  notification_for: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     comment :'1=Send game request'
   },
   topic_id: {
     type: DataTypes.INTEGER(11),
     allowNull : true,
     references:{
      model : 'topics',
      key : 'id'
     }
   },
   status: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : '0',
     comment : "0=Not read,1=read"
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

sequelize.sync();

console.log('notifications inserted successfully');

