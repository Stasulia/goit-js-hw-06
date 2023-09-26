const input = document.querySelector('#validation-input');
input.addEventListener('blur', handlerInput);

function handlerInput(event) {
    const dataLength = Number(input.dataset.length);
    const inputLength = event.currentTarget.value.length;
    input.classList.remove('valid', 'invalid')
    if (dataLength === inputLength) {
         input.classList.add('valid')
    } else 
        input.classList.add('invalid')
};