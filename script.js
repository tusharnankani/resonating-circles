let body = document.getElementsByTagName('body')[0];

createNewCircle = () => {
    let newCircle = document.createElement('div');
    newCircle.classList.add('circle');
    
    body.appendChild(newCircle);
    setTimeout(() => body.removeChild(newCircle), 4000);
}

body.addEventListener('click', (event) => {
    createNewCircle();
})

body.addEventListener("keydown", (event) => {
    if(event.key === " ")
        createNewCircle(); 
})
