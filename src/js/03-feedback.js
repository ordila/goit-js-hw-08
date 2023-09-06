import localStorageService from './localstorage';
const _ = require('lodash');

const refs = {
  formEl: document.querySelector('.js-contact-form'),
};

let userData = {};
function fillContactForm() {
  const userDataFromLs = localStorageService.load('feedback-form-state');
  if (userDataFromLs === undefined) {
    return;
  }
  for (const key of Object.keys(userDataFromLs)) {
    if (userDataFromLs.hasOwnProperty(key)) {
      refs.formEl.elements[key].value = userDataFromLs[key];
    }
  }
  userData = userDataFromLs;
}
fillContactForm();

function onFormElSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userData);
  userData = {};
}
refs.formEl.addEventListener(
  'input',
  _.throttle(event => {
    const { target: contactFormElement } = event;
    const name = contactFormElement.name;
    const value = contactFormElement.value;

    userData[name] = value;
    localStorageService.save('feedback-form-state', userData);
  }, 500)
);
refs.formEl.addEventListener('submit', onFormElSubmit);
