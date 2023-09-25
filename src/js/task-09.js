const body = document.querySelector('body')
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');
button.addEventListener('click', getRandomHexColor);

function getRandomHexColor(event) {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    body.style.backgroundColor = randomColor;
    span.textContent = randomColor;
}
