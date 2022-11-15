const ANIMATION_TIME_PER_CIRCLE = 2500; /* ms */
const CIRCLE_DIAMETER = 3; /* rem */

let GLOBAL_COUNTER = 0;
let root = document.querySelector(':root');
let body = document.getElementsByTagName('body')[0];

createNewCircle = (x = window.innerWidth / 2, y = window.innerHeight / 2) => {
    let newCircle = document.createElement('div');
    newCircle.classList.add(`circle`, `circle-${GLOBAL_COUNTER++}`);

    /* set the orginating circle from x and y coordinate */
    newCircle.style.setProperty('top', `calc(${y}px - ${CIRCLE_DIAMETER / 2}rem`);
    newCircle.style.setProperty('left', `calc(${x}px - ${CIRCLE_DIAMETER / 2}rem`);

    body.appendChild(newCircle);
    setTimeout(() => body.removeChild(newCircle), ANIMATION_TIME_PER_CIRCLE);
}

body.addEventListener('click', (event) => {
    createNewCircle(event.x, event.y);
})

body.addEventListener("keydown", (event) => {
    if(event.key === " ")
    createNewCircle(); 
})
