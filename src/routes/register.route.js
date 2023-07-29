const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.controller');
const { body, validationResult } = require('express-validator');
const {errorRes} = require('../utils/util.statusCode');

/* GET programming languages. */
router.post('/',body('email').isLength({ min:1  }), body('username').isLength({ min:1  }), body('password').isLength({ min: 5 }), function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json(errorRes('01',errors.array()));
    }
    next()
}, registerController.create);


module.exports = router;