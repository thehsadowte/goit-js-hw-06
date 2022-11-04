const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const newArr = ingredients.map(el => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = el;
});
ingredientsEl.append(newArr);
