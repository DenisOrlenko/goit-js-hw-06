const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
// 1
// const onInputElInput = () => {
//   textEl.style.fontSize = `${inputEl.value}px`;
// };
//
// 2
// function onInputElInput(event) {
const onInputElInput = event => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};

inputEl.addEventListener('input', onInputElInput);
