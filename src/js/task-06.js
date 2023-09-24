const input = document.querySelector('#validation-input');
input.addEventListener('blur', handlerInput);

function handlerInput(event) {
    const dataLength = Number(input.dataset.length);
    const inputLength = event.currentTarget.value.length;
    if (dataLength === inputLength) {
         input.classList.toggle('valid')
    } else 
        input.classList.toggle('invalid')
};