let image = document.getElementsByClassName('image')[0]
image.src =  "./images/image-tanya.jpg" //default

const buttons = document.getElementsByClassName('button')

const prev = buttons[0]
const next = buttons[1]
let state = 0


const updateData = ()=>{
    state = (state+1)%2
    console.log(state)
    if(state==0){
        //show tanya
        console.log(image.src)
        image.src = "./images/image-tanya.jpg"
        // image.srcset = "./images/image-tanya.jpg"
        document.getElementsByClassName('content-tanya')[0].style.display = 'flex'
        document.getElementsByClassName('content-john')[0].style.display = 'none'
    }else{
        //show john
        console.log(image.src)
        image.src = "./images/image-john.jpg"
        // image.srcset = "./images/image-john.jpg"
        document.getElementsByClassName('content-john')[0].style.display = 'flex'
        document.getElementsByClassName('content-tanya')[0].style.display = 'none'
    }
}

prev.addEventListener('click',updateData)
next.addEventListener('click',updateData)