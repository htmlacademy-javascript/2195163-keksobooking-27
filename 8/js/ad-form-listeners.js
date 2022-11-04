import {validateForm} from './validate-ad-form.js';

const adForm = document.querySelector('.ad-form');
const timeInItem = document.querySelector('#timein');
const timeoutItem = document.querySelector('#timeout');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const onTypeSelectChange = () => {
  priceInput.placeholder = minPrice[typeSelect.value];
  priceInput.min = minPrice[typeSelect.value];
  priceInput.dataset.pristineMinMessage = `минимальное значение ${minPrice[typeSelect.value]}`;
};

const onTimeInItemChange = () => timeoutItem.value = timeInItem.value;
const onTimeOutItemChange = () => timeInItem.value = timeoutItem.value;

const onAddFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {}
};

/*typeSelect.addEventListener('change', getTypeChange);
priceItem.addEventListener('change', getTypeChange);*/

const setAdFormListeners = () => {
  adForm.addEventListener('submit', onAddFormSubmit);
  timeInItem.addEventListener('change', onTimeInItemChange);
  timeoutItem.addEventListener('change', onTimeOutItemChange);
  typeSelect.addEventListener('change', onTypeSelectChange);
};

export {setAdFormListeners};
