import {validateForm} from './validate-ad-form.js';

const adForm = document.querySelector('.ad-form');
const timeInItem = document.querySelector('#timein');
const timeoutItem = document.querySelector('#timeout');
const priceList = document.querySelector('#price');
const typeList = document.querySelector('#type');

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const getTypeChange = () => {
  priceList.placeholder = minPrice[typeList.value];
  priceList.min = minPrice[typeList.value];
  priceList.dataset.pristineMinMessage = `минимальное значение ${minPrice[typeList.value]}`;
};

typeList.addEventListener('change', getTypeChange);
priceList.addEventListener('change', getTypeChange);


const onTimeInItemChange = () => timeoutItem.value = timeInItem.value;
const onTimeOutItemChange = () => timeInItem.value = timeoutItem.value;

const onAddFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
  }
};

const setAdFormListeners = () => {
  adForm.addEventListener('submit', onAddFormSubmit);
  timeInItem.addEventListener('change', onTimeInItemChange);
  timeoutItem.addEventListener('change', onTimeOutItemChange);
};

export {setAdFormListeners};
