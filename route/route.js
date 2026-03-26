const express = require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send("ye mera data recieve hua")
});
router.post("/",(req,res)=>{
    res.send("yeh mera data send hua")
});
module.exports=router;




  