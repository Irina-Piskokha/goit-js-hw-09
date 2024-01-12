const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const keyObj = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(keyObj));
}

function onWindowLoad() {
  //   const saveObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  //   refs.input.value = saveObj.email;
  //   refs.textarea.value = saveObj.message;
  const saveObj = localStorage.getItem('feedback-form-state');
  console.log(saveObj);
  if (saveObj) {
    saveObj.JSON.parse(saveObj);
    refs.input.value = saveObj.email;
    refs.textarea.value = saveObj.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.target.elements;
  const obj = {
    email: email.value,
    message: message.value,
  };
  console.log(obj);

  localStorage.removeItem('feedback-form-state');

  evt.target.reset();
}

onWindowLoad();
