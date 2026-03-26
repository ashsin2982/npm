// const http=require("http")
// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("ye mera home page h")
//     }
//     else if(req.url==="/about"){
//         res.end("yeh mera about home page hai")
//     }
//     res.end("yeh wrong route h")
// })
// server.listen(3000,()=>{
//     console.log("hiiii")
// })
const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("ashi")
    }
    else if(req.url==="/about"){
        res.end("ashu")
    }
    res.end("yeh wrong route hai")
})
server.listen(3000,()=>{
    console.log("backend server using node js digital image processing theory of automata and formal languages introduction to big data a")
})