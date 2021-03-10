document.addEventListener("DOMContentLoaded", function(e) {
    let questions = document.getElementsByClassName('question')
    // console.log(questions)
    
    for(let question of questions){
        question.addEventListener("click",()=>{
            // console.log(question)
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active')
            if(!isActive){
                answer.classList.add('active')
            }
            else{
                answer.classList.remove('active')
            }
        })
    }


})