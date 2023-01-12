// !
const inputEl = document.getElementById('validation-input');

const onInputBlur = () => {
  if (inputEl.value.length < inputEl.dataset.length || inputEl.value.length > inputEl.dataset.length) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.replace('invalid', 'valid');
    // или
    // inputEl.classList.remove('invalid');
    // inputEl.classList.add('valid');
  }
};

inputEl.addEventListener('blur', onInputBlur);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 1!
// const inputEl = document.getElementById('validation-input');

// inputEl.addEventListener('blur', () => {
//   if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
//     inputEl.className = 'valid';
//   } else inputEl.className = 'invalid';
// });
//

// 3
// или (event как ссілка на єлемент, на котором висит прослушиватель собітия)
// const onInputInput = event => {
//   if (event.currentTarget.dataset.length <= event.currentTarget.value.length) {
//     event.currentTarget.className = 'valid';
//   } else event.currentTarget.className = 'invalid';
// };

// inputEl.addEventListener('blur', onInputInput);
//
//
// 4!
// const inputEl = document.querySelector('#validation-input');
// const inputLength = inputEl.dataset.length;

// const onBlurInput = event => {
//   if (Number(event.currentTarget.value.length) === Number(inputLength)) {
//     inputEl.classList.add('valid');
//   } else {
//     inputEl.classList.add('invalid');
//   }
// };
// function onFocusInput() {
//   inputEl.classList.remove('invalid', 'valid');
// }

// inputEl.addEventListener('blur', onBlurInput);
// inputEl.addEventListener('focus', onFocusInput);
