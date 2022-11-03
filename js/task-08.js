const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('Please do not leave empty fields !');
    return;
  }

  const formValues = { email: email.value, password: password.value };

  console.log(formValues);

  event.currentTarget.reset();
}

// decoration just for fun
const wrapper = document.createElement('div');
form.before(wrapper);
wrapper.append(form);
wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center';
