const faceButtonEl = document.getElementById('facebook'); 
const linkButtonEl = document.getElementById('link'); 
const gitButtonEl = document.getElementById('git'); 
const webButtonEl = document.getElementById('web'); 
const youtubeButtonEl = document.getElementById('youtube'); 


const furl = "https://www.facebook.com/anietie.dickson.1"
const lurl = "https://www.linkedin.com/in/anietie-dickson-ab5a10270/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3BV9kIoGSLSGulxtsDPPaWOA%3D%3D"
const gurl = "https://github.com/dicksongate?tab=repositories"



faceButtonEl.addEventListener("click", async() => {

    const response = await fetch(furl);
    const facepage = response.json();

    console.log(response);

})


linkButtonEl.addEventListener("click", async() => {
    const response = await fetch(lurl)

    console.log("linkin Button clicked");
})


gitButtonEl.addEventListener("click", async() => {
    const response = await fetch(gurl)

    console.log("Git Button clicked");
})


webButtonEl.addEventListener("click", async() => {

    console.log("website Button clicked");
})


youtubeButtonEl.addEventListener("click", function clickweb(){
    
    console.log("youtube Button clicked");
})

