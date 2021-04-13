const width = document.body.clientWidth
console.log(document.body.clientWidth)

if(width>870){
    let shareButton = document.getElementsByClassName('button')[0]
    const tooltip = document.getElementById('tooltip')
    
    shareButton.addEventListener("click",()=>{
        if(tooltip.style.display === "flex"){
            tooltip.style.display = "none"; 
        } 
        else {
            tooltip.style.display = "flex"; 
        }
    })
}
else{
    let openShareButton = document.getElementsByClassName('button')[0]
    let closeShareButton = document.getElementsByClassName('close-button')[0]

    const meta = document.getElementsByClassName("meta")[0]
    const mobileShare = document.getElementsByClassName("mobile-share")[0]
    console.log(meta,mobileShare)
    openShareButton.addEventListener("click",()=>{
        
        //hide the meta div
        meta.style.display = "none"; 
        
        //show the mobile-share div
        mobileShare.style.display = "flex"

    })

    closeShareButton.addEventListener("click",()=>{
        meta.style.display = "flex"

        mobileShare.style.display = "none"
    })
}

