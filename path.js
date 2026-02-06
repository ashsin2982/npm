const path = require('path');
const filePath = "C:\Users\ASHI\OneDrive\Desktop\backend\path.js";
const filename = path.basename(filePath);
console.log(filename); 
const filenameWithoutExt = path.basename(filePath, '.js');
console.log(filenameWithoutExt);
