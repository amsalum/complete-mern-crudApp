const express=require('express');
const router=express.Router();
const crudControllers=require('../controllers/crudControllers');

router.post('/',crudControllers.createCruds)
router.get('/',crudControllers.getCruds)
router.get('/:id',crudControllers.getcrud)
router.put('/:id',crudControllers.updateCrud)
router.delete('/:id',crudControllers.deleteCrud)

module.exports=router