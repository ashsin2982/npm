const fs= require('fs');
fs.writeFileSync('example.txt','utf8',
function(e,data){
    if(e) console.log("ye aaya error");
    console.log(data);
    });
console.log("file created successfully");
console.log("file system operation completed");
