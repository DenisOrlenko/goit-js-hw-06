function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// создаю обьект {свойство-это элемент HTML, значение-это элемент JS(через querySelector) }
const refs = { body: document.querySelector('body'), button: document.querySelector('.change-color'), span: document.querySelector('.color') };

const onButtonClick = () => {
  // цвет фона
  refs.body.style.backgroundColor = getRandomHexColor();
  // изменение текста(название цвета)
  refs.span.textContent = getRandomHexColor();
};

refs.button.addEventListener('click', onButtonClick);

// 2
// const container = document.querySelector('.widget');

// const onButtonClick = () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   container.firstElementChild.firstElementChild.textContent = getRandomHexColor();
// };

// container.lastElementChild.addEventListener('click', onButtonClick);
