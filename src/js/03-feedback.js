import localStorageService from './localstorage';
const _ = require('lodash');

const refs = {
  formEl: document.querySelector('.js-contact-form'),
};

const userData = {};
function fillContactForm() {
  const userDataFromLs = localStorageService.load('feedback-form-state');
  if (userDataFromLs === null || userDataFromLs === undefined) {
    return;
  }
  for (key of Object.keys(userDataFromLs)) {
    refs.formEl.elements[key].value = userDataFromLs[key];
  }
}
fillContactForm();

function onFormElSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.clear();
  console.log(userData);
}
refs.formEl.addEventListener(
  'input',
  _.throttle(event => {
    const { target: contactFormElement } = event;
    const value = contactFormElement.value;
    const name = contactFormElement.name;

    userData[name] = value;
    localStorageService.save('feedback-form-state', userData);
  }, 500)
);
refs.formEl.addEventListener('submit', onFormElSubmit);
