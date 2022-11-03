function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
  widget: document.querySelector('.widget'),
  bodyEl: document.querySelector('body'),
};

refs.button.addEventListener('click', onClickBtn);

function onClickBtn() {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;

  refs.span.textContent = color;
}
