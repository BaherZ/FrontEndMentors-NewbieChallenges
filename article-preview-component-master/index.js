const toolTipButton = document.querySelector('button')
console.log(toolTipButton)

const tooltip = document.getElementById('tooltip')

toolTipButton.addEventListener("click",()=>{
    if(tooltip.style.display === "flex"){
        tooltip.style.display = "none"; 
    } else {
        tooltip.style.display = "flex"; 
    }
})
