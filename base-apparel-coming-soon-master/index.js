const errorIcon = document.getElementById('error-icon')
const errorLabel = document.getElementById('error-label')
const submitButton = document.getElementById('submit')
const email = document.getElementById('email')

function isEmailValid(email){
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isMatch = regex.test(String(email).toLowerCase())
    console.log("in function, isMatch is: ",isMatch)
    return isMatch
}

submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    value = email.value
    emailIsValid = isEmailValid(value)
    console.log(emailIsValid)
    if(!emailIsValid){
        errorLabel.style.display = "initial"
        errorLabel.style.marginTop="0.5em"
        errorIcon.style.display = "initial"
        email.style.border = "2px solid hsl(0, 93%, 68%)"
    }else{
        errorLabel.style.display = "none"
        errorIcon.style.display = "none"
        email.style.border = "1px solid hsl(0, 36%, 70%)"
    }
})