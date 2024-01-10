const fs = require('node:fs/promises');
const path = require('node:path');
const { error } = require('node:console');

//Create Folder
//fs.mkdir(path.join(__dirname, 'templates'), err=> {
  //  if (err) throw new Error()
    //console.log('Folder was created successfully')
//})



//Create Folder and File :
//Step one create Folder:
//fs.mkdir(path.join(__dirname, 'notes'), err=> {
  //  if (err) throw new Error()
    //console.log('Folder was created successfully')
//})

//Step two create File and writing text to a file:
//fs.writeFile(path.join(__dirname, 'notes', 'january.txt'), 'Create new Lesson NodeJs. Hello Ozodbek!', err=>{
  //  if (err) throw new Error()
    //console.log('File was created Successfully')
//})

//Step two create File, writing text to a file and file changed:
fs.writeFile(path.join(__dirname, 'notes', 'january.txt'), 'I love you NodeJs :)', err=>{
    if (err) throw new Error()
    console.log('File was created Successfully')

    //fs.appendFile(path.join(__dirname, 'notes', 'january.txt'), 'Hello My name is NodeJs', err=> {
      //  if (err) throw new Error();

        //console.log('File was changed successfully!');
    //})

    
})


fs.readFile(path.join(__dirname, 'notes', 'january.txt'), "utf-8" ,(err, data)=>{
  if (err) throw new Error()
  console.log(Buffer.from(data).toString())
})


fs.writeFile(path.join(__dirname, 'hello.txt'), 'Create new Lesson NodeJs. Hello Ozodbek!', err=>{
    if (err) throw new Error()
    console.log('File was created Successfully')
})

































