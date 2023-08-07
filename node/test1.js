var fs =require ("fs");
var data = fs.readFileSync('node1.txt') ;
console.log(data.toString());
console.log("Program Ended");