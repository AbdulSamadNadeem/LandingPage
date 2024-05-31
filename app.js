let content= document.getElementById('content')


function sidebar() {
    content.classList.toggle('open')
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

let alert= document.getElementById('alert')
let back = document.getElementById('back')
let button =document.getElementById('button')
let overlay=document.getElementById('overlay')

function popup() {

    alert.classList.toggle('popup')
    overlay.classList.toggle('transparent')
    if (alert.style.display === "block") {
        alert.style.display = "none";
    } else {
        alert.style.display = "block";
    }
   
}

function closePopUp(){
    let alert= document.getElementById('alert')
    alert.classList.remove('popup')
    
}
function refresh(){
    location.reload()
}


   