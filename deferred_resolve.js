function downloadpromise()
{
    return new Promise(function(resolve,reject)
{
    console.log("starting to download");
    setTimeout(function(){console.log("download is complete") 
    resolve();},3000)

})}
let downloadedfile=downloadpromise();
setTimeout(function(){downloadedfile.then(function(){console.log("after download")})},5000)
