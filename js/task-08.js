const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
  // отмена настройки по умолчанию (перезагрузки страницы при отправке формы)
  event.preventDefault();

  // деструктуризация <input name="email" <input name="password"
  const {
    elements: { email, password },
  } = event.currentTarget;

  // если поля незаполнены - alert (заполните форму)
  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');

    // если поля заполнены правильно - даные выводятся в консоль
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(`${name}: ${value}`);
    });
    // очищает значения полей после отправки формы (если все поля заполнены)
    event.currentTarget.reset();
  }
};

formEl.addEventListener('submit', onFormSubmit);

// event => currentTarget => elements => email => value;
// event => currentTarget => elements => email => password;

// 1 сбор выборочных данных
// const formElements = event.currentTarget.elements;
// const emailValue = formElements.email.value;
// const passwordValue = formElements.password.value;
