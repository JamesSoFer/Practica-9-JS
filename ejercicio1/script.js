//
// Practica 9
//

function random (event){  

    let X = Math.floor(Math.random() * (256 - 0) + 0);
    let Y = Math.floor(Math.random() * (256 - 0) + 0);
    let Z = Math.floor(Math.random() * (256 - 0) + 0);

    const p = event.currentTarget;

    p.style.color = `rgb(${X},${Y},${Z})`;
}

function black (event){  

    const p = event.currentTarget;

    p.style.color = 'black';
}

const parrafos = document.querySelectorAll('p');

for (let i=0; i<parrafos.length; i++){
    parrafos[i].addEventListener('mouseenter',random);
}

for (let i=0; i<parrafos.length; i++){
    parrafos[i].addEventListener('mouseleave',black);
}