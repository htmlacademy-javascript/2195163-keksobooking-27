
import {initSlider} from './slider.js';
import {validateForm, resetValidation} from './validate-ad-form.js';
import {activateAdForm} from './forms-states.js';
import {clearImageBlocks, addPhotoInputsListeners} from './preload-images.js';
import {setStartAddressValue, resetMap} from './map.js';
import {sendData} from './api.js';
import {renderSuccessMessage} from './success.js';
import {renderPostErrorMessage} from './error.js';

const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const timeInItem = document.querySelector('#timein');
const timeoutItem = document.querySelector('#timeout');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');
const slider = document.querySelector('.ad-form__slider');
const submitButton = document.querySelector('.ad-form__submit');

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const trackPrice = () => {
  priceInput.placeholder = minPrice[typeSelect.value];
  priceInput.min = minPrice[typeSelect.value];
  priceInput.dataset.pristineMinMessage = `минимальное значение ${minPrice[typeSelect.value]}`;
};

const onTypeSelectChange = () => trackPrice();

const onPriceInputInput = () => trackPrice();

const onTimeInItemChange = () => timeoutItem.value = timeInItem.value;
const onTimeOutItemChange = () => timeInItem.value = timeoutItem.value;

const resetApp = () => {
  clearImageBlocks();
  resetMap();
  resetValidation();
  slider.noUiSlider.reset();
  setTimeout(() => {
    setStartAddressValue();
  });
};

const sendDataErrorCallback = () => {
  renderPostErrorMessage();
  submitButton.disabled = false;
};

const sendDataSuccessCallback = () => {
  renderSuccessMessage();
  setTimeout(() => {
    submitButton.disabled = false;
    filterForm.reset();
    adForm.reset();
    resetApp();
  });
};

const onAddFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    submitButton.disabled = true;
    const formData = new FormData(adForm);
    sendData(sendDataSuccessCallback, sendDataErrorCallback, formData);
  }
};

const onAddFormReset = () => {
  resetApp();
  filterForm.reset();
};

const setAdFormListeners = () => {
  adForm.addEventListener('submit', onAddFormSubmit);
  adForm.addEventListener('reset', onAddFormReset);
  timeInItem.addEventListener('change', onTimeInItemChange);
  timeoutItem.addEventListener('change', onTimeOutItemChange);
  typeSelect.addEventListener('change', onTypeSelectChange);
  priceInput.addEventListener('input', onPriceInputInput);
  addPhotoInputsListeners();
};

const setAdFormAction = () => {
  activateAdForm();
  setAdFormListeners();
  initSlider();
};

export {setAdFormAction};
