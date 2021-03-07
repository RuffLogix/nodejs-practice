# 🏮 [Module : fs] จัดการไฟล์กันเต๊อะ
fs เป็น module ที่ใช้จัดการ File System เช่น Create Files , Delete Files , Rename Files , Update Files หรือ Read Files.
### Table of Contents
- [🐣 สร้างไฟล์ : Create Files](#🐣สร้างไฟล์:createfiles)
- [🐣 อ่านไฟล์ : Read Files](#🐣อ่านไฟล์:readfiles)
- [🐣 ลบไฟล์ : Delete Files](#🐣ลบไฟล์:deletefiles)
- [🐣 เปลี่ยนชื่อไฟล์ : Rename Files](#🐣เปลี่ยนชื่อไฟล์:renamefiles)
- [🐣 อัปเดทไฟล์ : Update Files](#🐣อัปเดทไฟล์:updatefiles)

#### การ Run nodejs ในเครื่อง
```cmd
    node <file_name> 
```
#### 🎈 Let's Start
```javascript
    let fs = require('fs');
```

## 🐣สร้างไฟล์:CreateFiles
- fs.appendFile();
- fs.writeFile();
- fs.open();
```javascript
    fs.appendFile("test.txt","Hello test.txt",(err)=>{
        console.log("text.txt was created!");
    });
    fs.writeFile("testzuza.txt","Hello testzuza.txt",(err)=>{
        console.log("testzuza.txt was created!");
    });

    fs.open("testzaza.txt",'w',(err,file)=>{
        console.log("testzaza.txt was created!");
    });
```
## 🐣อ่านไฟล์:ReadFiles
- fs.open();
```javascript 
    fs.open("testzaza.txt",'w',(err,file)=>{
        console.log("testzaza.txt was created!");
    });
```
## 🐣ลบไฟล์:DeleteFiles
- fs.unlink();
```javascript
    fs.unlink("test.txt",(err)=>{
        console.log("test.txt was deleted!");
    });
    fs.unlink("testzaza.txt",(err)=>{
        console.log("testzaza.txt was deleted!");
    });
```
## 🐣เปลี่ยนชื่อไฟล์:RenameFiles
- fs.rename();
```javascript
    fs.rename("testzuza.txt","eiei.txt",(err)=>{
        console.log("Renaming was successful!");
    });
```
## 🐣อัปเดทไฟล์:UpdateFiles
- คำสั่ง fs.appendFile() สามารถสร้างและอัปเดทไฟล์ ได้เลย 🐥
```javascript
    fs.appendFile("test.txt","Hello test.txt",(err)=>{
        console.log("text.txt was created!");
    });
```