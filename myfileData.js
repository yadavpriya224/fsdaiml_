const fs=require('fs');
function mywriteFile(){
try{
fs.writeFileSync("data.txt","Data is written by nodejs");
console.log("Data Written Successfully");
}
catch(err){
    console.log("Error in writing the data:"+err);
}
}
function myreadFile(){
    try{
console.log("Before reading");
const rd=fs.readFileSync("data.txt",{encoding:'utf-8'})
console.log(rd.toString());
console.log("After reading");
    }
    catch(err){
        console.log("Error in reading the data:"+err);
}
}
function myfileAppend(){
try{
console.log("Before append");
fs.appendFileSync("data.txt","Append data by fs module");
console.log("After append");
}
catch(err){
    console.log("Error in appending the data:"+err);
}
}
function delFile(){
    try{
fs.unlinkSync("data.txt");
console.log("file deleted");
    }
    catch(err){
        console.log("Error in unlinking the data:"+err);
}
}
const obj={myfileAppend,myreadFile,mywriteFile,delFile};
module.exports=obj;