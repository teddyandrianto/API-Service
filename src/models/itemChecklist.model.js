// import sequelize 
const Sequelize = require("sequelize");
// import connection 
const { db } = require("../configs/db.config");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Checklist = db.define('tbl_checklist', {
  // Define attributes
  id_item: {
    type: DataTypes.INTEGER
  },
  nama_item: {
    type: DataTypes.STRING
  },
  id_checklist: {
    type: DataTypes.INTEGER
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
  Checklist,
};