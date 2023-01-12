const {Sequelize, Model, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const admins = sequelize.define("admins", {

  user_name: {
     type: DataTypes.STRING(64),
     allowNull: false
   },
   email: {
     type: DataTypes.INTEGER(64),
     allowNull: false,
   },
   password: {
     type: DataTypes.STRING(64),
     allowNull : false,
   },
   contact_no: {
     type: DataTypes.STRING(64),
     allowNull : true,
   },
   roles : {
    type : DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue : "1",
    comment : '1=super admin'
   },
   otp : {
    type : DataTypes.INTEGER(11),
    allowNull : true,
   },
   status : {
    type : DataTypes.INTEGER(3),
    allowNull : false,
    defaultValue : "1",
    comment : '1=active,0= deactive', 
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

sequelize.sync().then(() => {
   console.log('admins table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = admins;