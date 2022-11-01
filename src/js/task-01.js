const categoryEl = document.querySelector('#categories');

const categoryLength = categoryEl.children.length;

console.log(`Number of categories: ${categoryLength}`);

const titleEl = document.querySelectorAll('.item');

titleEl.forEach(el => {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements: ${el.querySelector('ul').children.length}`);
});
