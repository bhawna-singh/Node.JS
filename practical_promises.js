function download(url){
    return new Promise (function(resolve,reject){
  if(!url.startsWith("http"))
  {reject (new Error("url does not start with http"))}
 else{console.log("start download",url)
     setTimeout(function(){                  //fake 3 sec download time
  let filename=url.split('/').pop()
  resolve(filename);
     },3000)
 }

    })
}
function resize(filename){
    return new Promise (function(resolve,reject){
  if(!filename.endsWith(".png"))
  {reject (new Error("file is not png"))}
 else{console.log("start resize",filename)
     setTimeout(function(){                        //fake 3 sec resize time
  let resizedfile=filename.split('.')[0]+ "-resized" +".png"
  resolve(resizedfile);
     },3000)
 }

    })
}
function upload(resizedfilename){
    return new Promise(function(resolve,reject){console.log("start upload",resizedfilename)
        setTimeout(function(){
 let uploadedurl="http://img.com" +"/" + resizedfilename
 resolve(uploadedurl)
        },3000)
    })
}



//download and then resize and then upload  a file

download("http://bh.logo.png")
.then(resize)
.then(upload)
.then(function(uploadedurl){
    console.log(" file was uploaded to",uploadedurl)
})

.catch(function(err){
    console.log(err)
})

