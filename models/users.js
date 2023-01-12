const {Sequelize, DataTypes} = require("sequelize");
const {sequelize} = require('../config/sequelize')

const users = sequelize.define("users", {

  
  user_name: {
     type: DataTypes.STRING(64),
     allowNull: false
   },
   
   full_name: {
     type: DataTypes.STRING(164),
     allowNull : true,
   },
   email: {
     type: DataTypes.STRING(164),
     allowNull : false,
   },
   is_social_login: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "0"
   },
   social_media_id: {
     type: DataTypes.INTEGER(64),
     allowNull : true,
   },
   social_media_type: {
     type: DataTypes.STRING(16),
     allowNull : true,
     comment : "google,facebook"
   },
   password: {
     type: DataTypes.STRING(255),
     allowNull : true,
   },
   otp: {
     type: DataTypes.INTEGER(8),
     allowNull : true,
   },
   verification_code: {
     type: DataTypes.STRING(164),
     allowNull : true,
   },
   birth_year: {
     type: DataTypes.INTEGER(11),
     allowNull : true,
   },
   country_id: {
     type: DataTypes.INTEGER(11),
     allowNull : true,
     references : {
      model : 'countries',
      key : 'id'
     },
   },
   contact_no: {
     type: DataTypes.INTEGER(16),
     allowNull : true,
   },
   is_email_verify: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "0"
   },
   is_contact_verify: {
     type: DataTypes.INTEGER(3),
     allowNull : false,
     defaultValue : "0"
   },
   xp: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
     defaultValue : "0"
   },
   lp: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
     defaultValue : "0"
   },
   lt: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
     defaultValue : "0"
   },
   avatar: {
     type: DataTypes.STRING(164),
     allowNull : false,
   },
   avatar_id: {
     type: DataTypes.INTEGER(11),
     allowNull : true,
     references : {
      model : 'avatars',
      key : 'id'
     },
   },
   account_type_id: {
     type: DataTypes.INTEGER(11),
     allowNull : false,
     references : {
      model : 'account_types',
      key : 'id'
     },
     defaultValue : "1"
   },
   status: {
     type: DataTypes.INTEGER,
     allowNull : false,
     defaultValue : "1"
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

console.log('users inserted successfully');

