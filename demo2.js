/*const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log("This is my 1st middleware");
})

app.get("/",(req,res)=>{
    res.send("Hello this is my home page");
})

app.listen(3000,()=>{
    console.log("My server is running port on 3000")
})

app.use(express.json())   //This is middleware

app.post("/data",(req,res)=>{
    console.log(req.body);
    res.send("data received successfully")
})
*/



const express=require("express");
const app=express();
app.use(express.json());
const notes=[];
app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({message:"ye mera hua data send"});
});
app.get("/notes", (req, res) => {
    res.status(201).json({message:"ye mera data hai",
        notes:notes
    });
});
app.delete("/notes/:id",(req,res)=>{
    const id=req.params.id;
    delete notes[id];
    res.status(200).json({message:"ye mera data delete"})
})
app.put("/notes/:id",(req,res)=>{
    const id=req.params.id;
    notes[id]=req.body;
    res.status(200).json({message:"ye hua mera data updates"})
})
app.patch("/notes/:id",(req,res)=>{
    const id=req.params.id;
    notes[id].description=req.body.description;
    res.status(200).json({message:"ye hua mera data updates"})
})
app.listen(3000,()=>{
    console.log("server is listening");
});