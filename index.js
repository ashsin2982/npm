const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("this is the home page");
})
app.get("/profile",(res,req)=>{
    res.send("this is the profile page");
})
app.get("/student",(res,req)=>{
    res.send("this is the student page");
})
app.get("/problem:id",(res,req)=>{
    const id=req.params.id
    res.send("${id}");
})
app.get("/search",(res,req)=>{
    const name=req.query.name
    res.send("${name}");
})
app.get("/contact",(res,req)=>{
    res.send("this is the contact page");
})
app.listen(3000,()=>{
    console.log("server is running on port no 3000");
})
