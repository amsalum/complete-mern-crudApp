const mongoose=require('mongoose');
const crudSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
    
});
const crudModels=mongoose.model('cruds',crudSchema);
module.exports=crudModels