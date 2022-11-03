
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

// just for decoration
const wrapperEl = document.createElement('div');
const titleEl = document.querySelector('h1');
inputEl.before(wrapperEl);
wrapperEl.append(inputEl, titleEl);

wrapperEl.style.cssText = 'display: flex; flex-direction: column; align-items: center';

// events handlers
inputEl.addEventListener('input', e => {
  if (inputEl.value !== '') {
    outputEl.innerHTML = inputEl.value;
  } else {
    outputEl.innerHTML = 'Anonymous';
  }
});
