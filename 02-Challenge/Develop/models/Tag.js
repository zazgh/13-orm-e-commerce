const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      null: false
    },
    tag_name: {
      type: DataTypes.STRING,
      null: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
