function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes'),
};

function onCreateBoxesClick(amount) {
  amount = refs.input.value;
  let markup = '';
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style = "height:${size}px; width:${size}px; background:${getRandomHexColor()}"></div>`;
    size += 10;
  }
  refs.box.insertAdjacentHTML('beforeend', markup);
}

function onDestroyBoxesClick() {
  refs.box.innerHTML = '';
  refs.input.value = '';
}

refs.createButton.addEventListener('click', onCreateBoxesClick);
refs.destroyButton.addEventListener('click', onDestroyBoxesClick);
