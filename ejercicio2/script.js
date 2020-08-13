//
//Practica 9
//

function changeColor(event) {
  if (colors == 'red'){

    event.currentTarget.style.backgroundColor = 'red';

    colors ='blue';
  } else {

    event.currentTarget.style.backgroundColor = 'blue';

    colors = 'red';
  }
}

let elements = document.querySelectorAll('div');
let colors='red';

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeColor);
}

