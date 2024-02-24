require("dotenv").config();
const express=require("express");
const cors=require('cors');
const mongoose=require("mongoose");
const app=express();
const router = require('./routes/crudRoutes');

//middlewares
app.use(express.json());
app.use(cors())


//routes
app.use('/crud',router);


//connecton to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to db");
    app.listen(process.env.PORT,()=>{
        console.log("server is running",process.env.PORT);
    })
})
.catch((err)=>{
    console.log(err);
})