let button = document.querySelector('#middle-button')
button.addEventListener('click', sayHi) 
function sayHi() { alert('Hi') }


let div = document.querySelector('.div-container')
div.addEventListener('dblclick', makeDivOrange)
function makeDivOrange() { div.style.backgroundColor = "orange" }