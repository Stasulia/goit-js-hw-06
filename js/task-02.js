const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulProducts = document.querySelector('#ingredients');
const liProducts =[];
ingredients.forEach(function(ingredient) {
 const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  liProducts.push(li);
})
ulProducts.append(...liProducts);
