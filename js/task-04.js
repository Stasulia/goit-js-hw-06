//const click = document.querySelector('#counter');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

function decrement() {
    counterValue -= 1;
    value.textContent = counterValue;
};
buttonDecrement.addEventListener('click', decrement);

function increment(){
    counterValue +=1;
    value.textContent = counterValue;
};
buttonIncrement.addEventListener('click', increment);