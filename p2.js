// const express=require('express')
// const app=express()
// let checktoken="Ashi"
// let checkpass="12345"

// app.use(express.json())

// function authtoken(req,res,next){
//     if(req.paramms.token==="" || req.params===underdefined){
//         return res.send({
//             status:0,
//             message:"token to enter kro"
//         })
//     }if(req,params.token!=checktoken){
//         return res.send({
//             status:0,
//             message:"token ko shi enter kro"
//         })
//     }
// }
const express = require("express")
const Checktoken = require("./route/checktoken")
const checkpass = require("./route/checkpass")
const app = express()
app.use(express.json())



app.get("/" , (req , res)=>{
    res.send({status:1 , msg: "this is home page API"})
})

app.get("/news" , Checktoken , checkpass,  (req , res)=>{
    res.send({status:1 , msg: "this is new page API"})
})

app.get("/news/:id" , (req , res)=>{
    const id = req.params.id
    res.send("News details API" + " " + id)
})
app.get("/product" , (req,res)=>{
    res.send({status: 1 , msg : "this  is product page API"})
})

app.post("/login" , (req , res)=>{
    console.log(req.body)
    res.status(200).json({
        status :1 ,
        msg: "Login API" ,
        bodyData : req.body ,
        querydata : req.query
    })
})

app.get("/error" , (req , res)=>{
    throw new Error("this is a error")
})
app.use((error ,req , res , next)=>{
    console.log(error)
    res.status(500).json({
        status:0,
        msg: "something went wrong"
    })
})
app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
})