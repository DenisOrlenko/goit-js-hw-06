// 1!
// const inputEl = document.getElementById('validation-input');

// inputEl.addEventListener('blur', () => {
//   if (inputEl.value.length >= inputEl.dataset.length) {
//     inputEl.className = 'valid';
//   } else inputEl.className = 'invalid';
// });
//
// 2!
// const inputToCheck = document.getElementById('validation-input');

// const onInputBlur = () => {
//   if (inputToCheck.value.length >= inputToCheck.dataset.length) {
//     inputToCheck.className = 'valid';
//   } else {
//     inputToCheck.className = 'invalid';
//   }
// };

// inputToCheck.addEventListener('blur', onInputBlur);
//
//
// 3
// или (event как ссілка на єлемент, на котором висит прослушиватель собітия)
// const onInputInput = (event) => {
//   if (event.currentTarget.dataset.length <= event.currentTarget.value.length) {
//     event.currentTarget.className = 'valid';
//   } else event.currentTarget.className = 'invalid';
// };

// inputToCheck.addEventListener('blur', onInputInput);
//
//
// 4!
const inputEl = document.getElementById('validation-input');

const onInputBlur = () => {
  if (inputEl.value.length < inputEl.dataset.length) {
    inputEl.classList.add('invalid');
  } else {
    // inputEl.classList.remove('invalid');
    // inputEl.classList.add('valid');
    // или
    inputEl.classList.replace('invalid', 'valid');
  }
};

inputEl.addEventListener('blur', onInputBlur);
//
//
