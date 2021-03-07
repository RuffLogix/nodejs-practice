let fs = require("fs");

//fs.appendFile : ใช้สร้าง และ update ไฟล์ได้ด้วย 😮 {ว้าววววววววววว};

//===========================สร้างไฟล์===========================//
//fs.appendFile(filename,string,callback function);
fs.appendFile("test.txt","Hello test.txt",(err)=>{
    //แสดงผลแบบง่อยๆ ว่า text.txt สร้างแล้ว.
    console.log("text.txt was created!");
});

//fs.writeFile(filename,string,callback function);
fs.writeFile("testzuza.txt","Hello testzuza.txt",(err)=>{
    console.log("testzuza.txt was created!");
});

//fs.open(filename,flag,callback function);
fs.open("testzaza.txt",'w',(err,file)=>{
    console.log("testzaza.txt was created!");
});

//===========================ลบไฟล์===========================//

//fs.unlink(filename,callback function);
fs.unlink("test.txt",(err)=>{
    console.log("test.txt was deleted!");
});
fs.unlink("testzaza.txt",(err)=>{
    console.log("testzaza.txt was deleted!");
});
/*
fs.unlink("testzuza.txt",(err)=>{
    console.log("testzuza.txt was deleted!");
});
*/

//===========================เปลี่ยนชือไฟล์===========================//
fs.rename("testzuza.txt","eiei.txt",(err)=>{
    console.log("Renaming was successful!");
});