// fs.writeFileSync('example.txt','utf8',
// function(e,data){
//     if(e) console.log("ye aaya error");
//     console.log(data);
// });
function ayush(){
    console.log("hello")
}
setTimeout(()=>{
    ayush()
    console.log("Ashi")
},200)
const nayapromie = new Promise((resolve, reject) => {
    let success = true; 
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

nayapromie
.then(() => console.log("ye hua resolve"))
.catch(() => console.log("ye hua resolve"))
const fs=require("fs")
fs.readFile("file.txt", "utf-8" , function(err,date){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
fs.promises.readFile("file.txt" , "utf-8")
.then((data) => console.log(data))
.catch((err) => console.log(err.message))

new Promise((resolve, reject) => {
  resolve(10);
})
.then(number => {
  console.log(number); 
  return number * 2;
})
.then(result => {
  console.log(result); 
  return result + 5;
})
.then(final => {
  console.log(final); 
})
.catch(error => {
  console.log("Error:", error);
});

const 