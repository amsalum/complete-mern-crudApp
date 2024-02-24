//controllers/crudControllers
const mongoose=require('mongoose');
const crudModels = require('../models/crudModel');

//post data or create data

const createCruds = async (req, res) => {
    try {
      const { name, email, mobile } = req.body;
      const crud = await crudModels.create({ name, email, mobile });
      res.status(200).json(crud);
      console.log("crud created successfully");
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the crud' });
    }
  };


//get all data
const getCruds=async(req,res)=>{
    try{
    const crud=await crudModels.find({});
    res.status(200).json(crud);
    console.log("crud fetched successfully");
}
catch(error){
    res.status(500).json({error:'An error occurred while getting the crud'})
}
}

//get single data
const getcrud=async(req,res)=>{
    try {
        const { id } = req.params;
        const crud = await crudModels.findById(id);
        res.status(200).json(crud);
        console.log("crud fetched successfully");
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while getting the crud' });
      }
}

//delete data
const deleteCrud=async(req,res)=>{
    try {
        const { id } = req.params;
        const crud = await crudModels.findByIdAndDelete(id);
        res.status(200).json(crud);
        console.log("crud deleted successfully");
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the crud' });
      }
    }
    
//update data
const updateCrud=async(req,res)=>{
    try {
        const { id } = req.params;
        const crud = await crudModels.findByIdAndUpdate(id, req.body);
        res.status(200).json(crud);
        console.log("crud updated successfully");
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the crud' });
      }
    }
    



module.exports={
    createCruds,
    getCruds,
    getcrud,
    deleteCrud,
    updateCrud
}