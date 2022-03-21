//writing all the variables to use/needed for the toggling

const container = document.querySelector('.search');

const btn1 = document.querySelector('button');

const input1 = document.querySelector('input');

//add eventlistner when clicked it toggles

btn1.addEventListener('click', () =>{
    container.classList.toggle('active')
    input1.focus();
})

//window.onclick = function(event) {
    //if(event.target == modal) {
        //modal.style.display = "none";
    //}
//}
//used container(.search) to add toggle instead of between input and button
//focus() for cursor to start blinking