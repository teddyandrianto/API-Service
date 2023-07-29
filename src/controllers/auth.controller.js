const jwt = require("jsonwebtoken");
const md5 = require('md5');
const  { User } = require("../models/user.model");
const {successRes,errorRes} = require('../utils/util.statusCode');


  async function loginUser(req, res, next) {
    try {
      const user = await User.findOne({
        attributes: ['id_user','username','email','password'],
        where: {
            username: req.body.username,
          }
      });

      if (!user) {
        return res.status(404).send(errorRes('02'));
      }
      if(user.password != md5(req.body.password)){
        return res.status(401).send(errorRes('03'));
      }      
      const authorizationToken = jwt.sign({id: user.id_user, username: user.username,email : user.email }, 'TOKEN_SECRET12345',{
        expiresIn: "1d"
      });
      await User.update({token: authorizationToken},{
        where:{
            id_user: user.id_user
        }
      });
      return res.status(200).send(successRes({
        "authorizationToken": authorizationToken,
        "dataAccount" : {
              "username" : user.username,
              "nama" : user.nama,
              "email" : user.email,
      }
    }));
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
  }
  

  module.exports = {
    loginUser,
  };