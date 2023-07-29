// import sequelize 
const Sequelize = require("sequelize");
// import connection 
const { db } = require("../configs/db.config");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const User = db.define('tbl_user', {
  // Define attributes
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  token: {
    type: DataTypes.TEXT
  }
},{
  // Freeze Table Name
  freezeTableName: true,
  underscored: true,
  createdAt: 'date_create',
  updatedAt: 'date_update'
});
 
// Export model Product
module.exports = {
  User,
};