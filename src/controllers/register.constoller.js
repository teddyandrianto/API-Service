const  { User } = require("../models/user.model");
const {successRes, errorRes} = require('../utils/util.statusCode');

 
  async function create(req, res, next) {
    try {
      let user = await User.create({ 
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });
      return res.status(200).send(successRes({
        "dataRegist": req.body,
      }))
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
  }
  

  
  module.exports = {
    create,
  };