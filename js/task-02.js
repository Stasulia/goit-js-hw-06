const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const products = document.querySelector('#ingredients');
ingredients.forEach(function(ingredient) {
 const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  
})
products.append(li);
ingredients.append(products);