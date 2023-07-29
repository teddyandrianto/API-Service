// import sequelize 
const Sequelize = require("sequelize");
// import connection 
const { db } = require("../configs/db.config");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Checklist = db.define('tbl_checklist', {
  // Define attributes
  id_checklist: {
    type: DataTypes.INTEGER
  },
  nama_checklist: {
    type: DataTypes.STRING
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