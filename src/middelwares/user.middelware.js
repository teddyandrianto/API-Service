const jwt = require("jsonwebtoken")
const {errorRes} = require('../utils/util.statusCode');
module.exports = function (req, res, next) {
    const authHeader = req.headers("authorization");
    const token = authHeader && authHeader.split(' ')[0];
    if (!token) return res.status(401).send(errorRes('04', 'Invalid Token'));

    jwt.verify(token, 'TOKEN_SECRET12345', (err, decoded) => {
      if(err) return res.status(401).send(errorRes('04', err));
        req.user = decoded;
      next();
    })
  };