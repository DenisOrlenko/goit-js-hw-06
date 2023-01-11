const inputEl = document.querySelector('#name-input');
const ouputEl = document.querySelector('#name-output');

const onInputElInput = event => {
  if (event.currentTarget.value !== '') {
    ouputEl.textContent = event.currentTarget.value;
  } else {
    ouputEl.textContent = 'Anonymous';
  }
};

inputEl.addEventListener('input', onInputElInput);
