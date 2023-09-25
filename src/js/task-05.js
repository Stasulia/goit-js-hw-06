const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', handlerInput);
function handlerInput(event) {
  outputName.textContent = event.currentTarget.value || 'Anonymus';
};

// inputName.addEventListener('input', (event) => {
// outputName.textContent = event.currentTarget.value || 'Anonymus';})
