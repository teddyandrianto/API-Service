// import sequelize
const { Sequelize } = require('sequelize')

 
// create connection
const db = new Sequelize('db_app', 'root','', {
    host: 'localhost',
    dialect : 'mysql',
    operatorsAliases: false
  });
  
  db.authenticate().then(function(){
        console.log("sucess");
      }).catch(function(error){
        console.log("error: "+error);
  });
 
// export connection
module.exports = {
    db,
  };