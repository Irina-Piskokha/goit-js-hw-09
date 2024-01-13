const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

onWindowLoad();

function onFormInput() {
  const keyObj = {
    email: refs.input.value.trim(),
    message: refs.textarea.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(keyObj));
}

function onWindowLoad() {
  let saveObj = localStorage.getItem('feedback-form-state');
  if (saveObj) {
    saveObj = JSON.parse(saveObj);
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
