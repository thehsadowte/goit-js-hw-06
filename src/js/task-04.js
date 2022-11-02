// Лічильник складається зі спану і кнопок, які по кліку повинні
// збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const incrButton = document.querySelector('[data-action="increment"]');
const decrButton = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

incrButton.addEventListener('click', e => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrButton.addEventListener('click', e => {
  counterValue -= 1;
  value.textContent = counterValue;
});

const counterDiv = document.querySelector('#counter');
counterDiv.style.cssText =
  'display: flex; justify-content: center; gap: 10px; font-family: Roboto; font-size: 35px; color: purple;';
