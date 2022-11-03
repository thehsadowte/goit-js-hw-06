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

/*=============================================
 =                   decoration                    =
 =============================================*/

const counterDiv = document.querySelector('#counter');
counterDiv.style.cssText =
  'display: flex; justify-content: center; gap: 10px; font-family: Roboto; font-size: 35px; color: purple;';
