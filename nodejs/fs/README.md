# 🏮 [Module : fs] จัดการไฟล์กันเต๊อะ
fs เป็น module ที่ใช้จัดการ File System เช่น Create Files , Delete Files , Rename Files , Update Files หรือ Read Files.
### Table of Contents
- [🐣 สร้างไฟล์ : Create Files]()
- [🐣 อ่านไฟล์ : Read Files]()
- [🐣 ลบไฟล์ : Delete Files]()
- [🐣 เปลี่ยนชื่อไฟล์ : Rename Files]()
- [🐣 อัปเดทไฟล์ : Update Files]()

#### การ Run nodejs ในเครื่อง
```cmd
    node <file_name> 
```
#### 🎈 Let's Start
```javascript
    let fs = require('fs');
```

## 🐣 สร้างไฟล์ : Create Files
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
## 🐣 อ่านไฟล์ : Read Files
- fs.open();
```javascript 
    fs.open("testzaza.txt",'w',(err,file)=>{
        console.log("testzaza.txt was created!");
    });
```
## 🐣 ลบไฟล์ : Delete Files
- fs.unlink();
```javascript
    fs.unlink("test.txt",(err)=>{
        console.log("test.txt was deleted!");
    });
    fs.unlink("testzaza.txt",(err)=>{
        console.log("testzaza.txt was deleted!");
    });
```
## 🐣 เปลี่ยนชื่อไฟล์ : Rename Files
- fs.rename();
```javascript
    fs.rename("testzuza.txt","eiei.txt",(err)=>{
        console.log("Renaming was successful!");
    });
```
## 🐣 อัปเดทไฟล์ : Update Files
- คำสั่ง fs.appendFile() สามารถสร้างและอัปเดทไฟล์ ได้เลย 🐥
```javascript
    fs.appendFile("test.txt","Hello test.txt",(err)=>{
        console.log("text.txt was created!");
    });
```