const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.map(el => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = el;
  ingredientsEl.append(listEl);
});
