const fs = require('fs');
const path=require('path');
const reaplaceThis="sh"
const replaceWith="shiva"
const preview=false
const folder=__dirname
try {
  fs.readdir(folder, (err,data)=>{
    //console.log(data);
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let oldFile=path.join(folder,item)
        let newFile=path.join(folder,item.replaceAll(reaplaceThis,replaceWith))
        if(!preview){
            fs.rename(oldFile,newFile,()=>{
                console.log("success",item,newFile)
            })

        }
        else{
            if("data/" + item!==newFile)console.log("data/"+item + " will be renamed to "+newFile)
        }
        
    }
  })
  console.log(data);
} catch (err) {
  console.error(err);
}
