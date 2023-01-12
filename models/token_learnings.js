const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require('../config/sequelize')

const token_learnings = sequelize.define("token_learnings", {


  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  learning_token: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: '0'
  },

  status: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: "1"
  },
  created_at: {
    type: DataTypes.TIME,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  updated_at: {
    type: DataTypes.TIME,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }

},
  {
    timestamps: false,
  });

sequelize.sync();

console.log('token_learnings inserted successfully');

