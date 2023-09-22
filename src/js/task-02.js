// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatoes',
//   'Herbs',
//   'Condiments',
// ];
const ingredients = document.querySelector('#ingredients');

const Potatoes = document.createElement('li');
Potatoes.textContent = 'Potatoes';
//Potatoes.classList.add('item');

const Mushrooms = document.createElement('li');
Mushrooms.textContent = 'Mushrooms';
//Mushrooms.classList.add('item');

const Garlic = document.createElement('li');
Garlic.textContent = 'Garlic';
//Garlic.classList.add('item');

const Tomatoes = document.createElement('li');
Tomatoes.textContent = 'Tomatoes';
//Tomatoes.classList.add('item');

const Herbs = document.createElement('li');
Herbs.textContent = 'Herbs';
//Herbs.classList.add('item');

const Condiments = document.createElement('li');
Condiments.textContent = 'Condiments';
//Condiments.classList.add('item');

ingredients.append(Potatoes, Mushrooms, Garlic, Tomatoes, Herbs, Condiments);
