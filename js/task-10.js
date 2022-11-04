function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxesWrapper: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('input[type="number"]'),
};

let newArr = [];
let divSize = 30;

function createBox() {
  const box = document.createElement('div');
  box.style.width = `${divSize}px`;
  box.style.height = `${divSize}px`;
  box.style.backgroundColor = getRandomHexColor();
  newArr.push(box);
}

const createBoxes = function (amount) {
  for (let i = 0; i < amount; i += 1) {
    createBox();
    divSize += 10;
    console.log(amount);
  }
  refs.boxesWrapper.append(...newArr);
};

const destroyBoxes = event => {
  refs.boxesWrapper.innerHTML = '';
  refs.input.value = '';
  newArr = [];
};

refs.createBtn.addEventListener('click', () => {
  let amount = Number(refs.input.value);
  if (amount === '') {
    alert('Please enter a number!');
  } else {
    createBoxes(amount);
    // console.log(amount);
  }
});

refs.destroyBtn.addEventListener('click', destroyBoxes);

// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити,
//     колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один
// параметр - число.Функція створює стільки < div >, скільки
//  вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і
// вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у ф
// орматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.
