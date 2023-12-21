let burgerContainer = document.querySelector('.burger__menu');

let lineStart = document.querySelector('.line__start');
let lineCenter = document.querySelector('.line__center');
let lineEnd = document.querySelector('.line__end');

let dropdown = document.querySelector('.dropdown');

burgerContainer.addEventListener('click', ()=>{
    burgerContainer.classList.toggle('burger__menu_click');
    lineStart.classList.toggle('line__active1');
    lineCenter.classList.toggle('line__active2');
    lineEnd.classList.toggle('line__active3');

    dropdown.classList.toggle('dropdown__open')


});