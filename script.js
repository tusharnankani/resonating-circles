let body = document.getElementsByTagName('body')[0];

body.addEventListener('click', (event) => {
    let newCircle = document.createElement('div');
    newCircle.classList.add('circle');
    
    body.appendChild(newCircle);
    setTimeout(() => body.removeChild(newCircle), 4000);
});