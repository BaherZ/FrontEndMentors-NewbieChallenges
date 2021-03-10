document.addEventListener("DOMContentLoaded", function(e) {
    let questions = document.getElementsByClassName('question')
    // console.log(questions)
    
    for(let question of questions){
        question.addEventListener("click",()=>{
            const answer = this.nextElementSibling;
            console.log(question)
            const currentDisplay = answer.style.display
            if(currentDisplay=='none'){
                answer.style.display = 'block'
            }
            else{
                answer.style.display = 'none'
            }
        })
    }


})