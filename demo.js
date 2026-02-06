/*const fs= require('fs');
fs.writeFileSync('example.txt','utf8',
function(e,data){
    if(e) console.log("ye aaya error");
    console.log(data);
    });
console.log("file created successfully");
console.log("file system operation completed");
function add(a,b){
    return a+b;
}
add();
module.exports=add;*/
export default function add(a,b){
    return a+b;
}