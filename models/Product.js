// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataType.STRING,
      allowNull: false
    },
    price: {
      type: DataType.DECIMAL,
      allowNull: false,
      // validates that the value is a decimal
    },
    stock: {
      type: DataType.INTEGER,
      allowNull: false,
      // default value of 10
      // validates that value is numberic
    },
    category_id: {
      type: DataType.INTEGER,
      // references the category model's id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
