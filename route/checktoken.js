const express=require('express')
const app=express()
let tokens="Ashi"
let mypass="12345"
let Checktoken = (req , res , next)=>{
    console.log(req.query.token)
    if (req.query.token === ""  || req.query.token === undefined){
        return res.send({status:0 , msg: "token is required"})
    }
    if (req.query.token !== tokens){
        return res.send({status:0 , msg: "token is invalid please provide a valid token"})
    }
    
    next()
}
app.use(Checktoken);
module.exports=Checktoken;