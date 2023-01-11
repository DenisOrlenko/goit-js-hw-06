const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
  // отмена настройки по умолчанию (перезагрузки страницы при отправке формы)
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  // event => currentTarget => elements => email => value;
  // event => currentTarget => elements => email => password;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  }

  // 1 сбор выборочных данных
  // const formElements = event.currentTarget.elements;
  // const emailValue = formElements.email.value;
  // const passwordValue = formElements.password.value;

  // const formElementsData = {
  //   emailValue,
  //   passwordValue,
  // };
  // console.log(formData);
  //
  // 2 сбор всех данных
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(`${name}: value`);
  });

  // очищает значения полей после отправки формы
  event.currentTarget.reset();
};

formEl.addEventListener('submit', onFormSubmit);
