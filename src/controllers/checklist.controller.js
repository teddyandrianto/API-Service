const  { Checklist } = require("../models/checklist.model");
const  { ItemChecklist } = require("../models/itemChecklist.model");
const {successRes, errorRes} = require('../utils/util.statusCode');

async function get(req, res, next) {
    try {
        const getCheklist = await Checklist.findAll({
          attributes: ['id_checklist','nama_checklist'],
          where: {
              id_checklist: req.userAmilin.id,
            },
          order: [
            ['id_checklist', 'DESC'],
          ]
        });
        return res.status(200).send(successRes({
          "dataChecklist": getCheklist,
        }))
    } catch (err) {
        next(err);
    }
  }
  
  async function create(req, res, next) {
    try {
      let checklist = await Checklist.create({ 
        nama_checklist: req.body.kepalaKeluarga,
      });
      return res.status(200).send(successRes({
        "dataChecklist": req.body,
      }))
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
  }
  
  
  async function remove(req, res, next) {
    try {
      const checkChecklist= await Checklist.findOne({where: { 
        id_checklist: req.params.id,
      }});

      if(!checkChecklist) {
        return res.status(404).send(errorRes('02'));
      }

      await Checklist.destroy({
        where: {
          id_checklist: req.params.id,
        },
      })
      return res.status(200).send(successRes({
        "dataChecklis": {
            "nama": checkChecklist.nama_checklist,
        },
      }))
    } catch (err) {
      console.error(`Error while deleting programming language`, err.message);
      next(err);
    }
  }

  async function getItem(req, res, next) {
    try {
        const getItemChecklist = await ItemChecklist.findOne({
          attributes: ['id_item','nama_item'],
          where: {
              id_item: req.params.idItem,
              id_checklist: req.params.idChecklist
            }});
        return res.status(200).send(successRes({
          "dataItemChecklist": getItemChecklist,
        }))
    } catch (err) {
        next(err);
    }
  }

  async function createItem(req, res, next) {
    try {
      let itemChecklist = await ItemChecklist.create({ 
        nama_item: req.body.itemName,
        id_checklist:req.params.idChecklist

      });
      return res.status(200).send(successRes({
        "dataItemChecklist": req.body,
      }))
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
  }

  async function updateNameItem(req, res, next) {
    try {
      const checkItemChecklist = await ItemChecklist.findOne({where: { 
        id_item: req.params.idItem,
      }});

      if(!checkItemChecklist) {
        return res.status(404).send(errorRes('02'));
      }

      await ItemChecklist.update({
        nama_item: req.body.itemName,
      },
      {
        where: {
          id: req.params.idItem,
        },
      })
      return res.status(200).send(successRes({
        "dataItemChecklist": req.body,
      }))
    } catch (err) {
      console.error(`Error while updating programming language`, err.message);
      next(err);
    }
  }

  async function removeItem(req, res, next) {
    try {
      const checkChecklist= await ItemChecklist.findOne({where: { 
        id_item: req.params.idItem,
        id_checklist: req.params.idChecklist,
      }});

      if(!checkChecklist) {
        return res.status(404).send(errorRes('02'));
      }

      await Checklist.destroy({
        where: {
          id_item: req.params.idItem,
        },
      })
      return res.status(200).send(successRes({
        "dataItemChecklis": {
            "namaItem": checkChecklist.nama_item,
        },
      }))
    } catch (err) {
      console.error(`Error while deleting programming language`, err.message);
      next(err);
    }
  }
  
  module.exports = {
    get,
    create,
    // update,
    remove,
    getItem,
    createItem,
    removeItem,
    updateNameItem
  };