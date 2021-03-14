document.addEventListener("DOMContentLoaded", function(e) {
    let questions = document.getElementsByClassName('question')
    // console.log(questions)
    
    for(let question of questions){
        question.addEventListener("click",()=>{
            // console.log(question)
            const answer = question.nextElementSibling;
            const answerIsActive = answer.classList.contains('active')
            const questionIsActive = question.classList.contains('active')

            
            if(!questionIsActive){
                question.classList.add('questionActive')
            }
            else{
                
                question.classList.remove('questionActive')
            }

            if(!answerIsActive){
                answer.classList.add('answerActive')
            }
            else{
                answer.classList.remove('answerActive')
            }
        })
    }


})