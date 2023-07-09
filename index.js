const fs = require('fs');
const path = require('path');
const replaceThis="tejas.file"
const replaceWith="batman.file"
const preview =true
const folder ="data"
try {
  // fs.readdir("data",(err,data)=>{
    fs.readdir(folder,(err,data)=>{

    console.log(data)
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let oldfile=path.join(folder,item)
      //let newfile="data/" + item.replaceAll(replaceThis,replaceWith)
      let newfile=path.join(folder,item.replaceAll(replaceThis,replaceWith))

      if(!preview){
 //fs.rename("data/" + item , newfile,()=>{
  fs.rename(oldfile,newfile,(err)=>{
    if(err){
      console.log(err)
    }else{
    //console.log("rename success", item, newfile)
   console.log("file renamed successfully")
    }
  });
      
    }
   else{
//console.log("data/" + item + " will renamed to " + newfile)
    if("data/" + item !== newfile) console.log("data/" + item + " will be renamed to " + newfile)
}
  }
})
}catch (err) {
  console.error(err);
}















