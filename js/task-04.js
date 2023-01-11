// 1
// const incrementBtn = document.querySelector('[data-action = "increment"]');
// const decrementBtn = document.querySelector('[data-action = "decrement"]');
// const counterValueUI = document.getElementById('value');

// let counterValue = 0;

// decrementBtn.addEventListener('click', () => {
//   counterValue -= 1;
//   counterValueUI.textContent = counterValue;
// });

// incrementBtn.addEventListener('click', () => {
//   counterValue += 1;
//   counterValueUI.textContent = counterValue;
// });
//
// 2
const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const counterValueUI = document.getElementById('value');

let counterValue = 0;

const onDecrementBtnClick = () => {
  counterValue -= 1;
  counterValueUI.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue += 1;
  counterValueUI.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);
