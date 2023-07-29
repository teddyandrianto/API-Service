const express = require('express');
const router = express.Router();
const app = express()
const checklistController = require('../controllers/checklist.controller');
const userMiddelware = require('../middelwares/user.middelware');
const { header, body, validationResult } = require('express-validator');
const {errorRes} = require('../utils/util.statusCode');

// router.get('/dashboard',userMiddelware, dashboardController.getDashboard);

/* GET programming languages. */
router.get('/checklist/', 
  userMiddelware, 
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json(errorRes('01',errors.array()));
    }
    next()
}, checklistController.get);
  
// /* POST programming language */
router.post('/checklist/',
  userMiddelware,
  body('name').isLength({ min: 1 }),  
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json(errorRes('01',errors.array()));
    }
    next()
},  checklistController.create);

// /* PUT programming language */
// router.put('/muzaki/:id', 
// userMiddelware,
// body('kepalaKeluarga').isLength({ min: 3 }), 
// body('jumlahAnggota').isLength({ min: 1 }), 
// body('jumlahBeras').isLength({ min: 1 }), 
// function (req, res, next) {
//   console.log("route"+req.params.id);
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(401).json(errorRes('01',errors.array()));
//   }
//   next()
// },
// muzakiController.update);

/* DELETE programming language */
router.delete('/checklist/:id',userMiddelware, checklistController.remove);

router.get('/checklist/:idCheklist/item/:idItem', 
  userMiddelware, 
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json(errorRes('01',errors.array()));
    }
    next()
}, checklistController.getItem);

router.post('/checklist/:idCheklist/item',
  userMiddelware,
  body('itemName').isLength({ min: 1 }),  
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json(errorRes('01',errors.array()));
    }
    next()
},  checklistController.createItem);

router.delete('/checklist/:idCheklist/item/:idItem',userMiddelware, checklistController.removeItem);

router.put('/checklist/:idCheklist/item/rename/:idItem',userMiddelware, checklistController.updateNameItem);

module.exports = router;