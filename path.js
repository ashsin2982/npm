const express = require('express');
const app=express();
const route=require("./route/route")
app.use("/ayush",route)
app.listen(3000,()=>{
    console.log("listening on 3000")
})
