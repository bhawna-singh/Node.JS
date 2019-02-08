// write a file

const fs=require('fs')  //fs-->api
fs.writeFile('myfile.txt',"some data",function(err)
{
    if(err) throw err
    console.log("file was written");
})





