import {validateForm} from './validate-ad-form.js';
import {sliderReset} from './slider.js';
import {resetMap} from './map.js';
import {sendData} from './api.js';
import {showAlert} from './util.js';
import {pristine} from './validate-ad-form.js';
import {resetFilters} from './forms-states.js';


const adForm = document.querySelector('.ad-form');
const timeInItem = document.querySelector('#timein');
const timeoutItem = document.querySelector('#timeout');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');
const adFormReset = document.querySelector('.ad-form__reset');
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

const onAddFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {}
};
const setAdFormListeners = () => {
  adForm.addEventListener('submit', onAddFormSubmit);
  timeInItem.addEventListener('change', onTimeInItemChange);
  timeoutItem.addEventListener('change', onTimeOutItemChange);
  typeSelect.addEventListener('change', onTypeSelectChange);
  priceInput.addEventListener('input', onPriceInputInput);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};


const updateMap = (evt) => {
  evt.preventDefault();
  sliderReset();
  resetFilters();
  resetMap();
};

adFormReset.addEventListener('click', updateMap);

export {setAdFormListeners, setUserFormSubmit, updateMap};
