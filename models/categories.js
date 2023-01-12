const {Sequelize,DataTypes} = require('sequelize');

const {sequelize} = require('../config/sequelize');

const categories = sequelize.define('categories',{
    account_type_id :{
        type : DataTypes.INTEGER(11),
        allowNull : true,
        references : {
            model : 'account_types',
            key : 'id',
        },
    },
    title : {
        type : DataTypes.STRING(164),
        allowNull : false,
    },
    description : {
        type : DataTypes.TEXT,
        allowNull : true,
    },
    icon :{
        type : DataTypes.STRING(164),
        allowNull : true,
    },
    color_code :{
        type : DataTypes.STRING(16),
        allowNull : true,
    },
    created_by:{
        type : DataTypes.INTEGER(11),
        allowNull : false,
        comment:'Admin ID',
        
    },
    created_by:{
        type : DataTypes.INTEGER(3),
        allowNull : false,
        defaultValue : '1',
        comment:'1=active,2=deactive',  
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
    console.log('avatars table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

module.exports = categories;