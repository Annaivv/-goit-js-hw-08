import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('form');
const email = document.querySelector('input[name = email]');
const textarea = document.querySelector('textarea[name = message]');

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function populateForm() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(parsedData);
  if (parsedData) {
    email.value = parsedData.email || '';
    textarea.value = parsedData.message || '';
  }
}
