import {validateForm} from './validate-ad-form.js';

const adForm = document.querySelector('.ad-form');
const timeInItem = document.querySelector('#timein');
const timeoutItem = document.querySelector('#timeout');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');
const sliderElement = document.querySelector('.ad-form__slider');

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

const sliderConfig = {
  min: 0,
  max: 100000,
  start : priceInput.placeholder,
  step: 1,
};

noUiSlider.create(sliderElement, {
  range : {
    min : sliderConfig.min,
    max : sliderConfig.max,
  },
  start : sliderConfig.start,
  step: sliderConfig.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

sliderElement.noUiSlider.on('update', () => {
  priceInput.value = sliderElement.noUiSlider.get();
});

typeSelect.addEventListener('change', ()=> {
  onTypeSelectChange();
  sliderElement.noUiSlider.set(priceInput.placeholder);
});


const setAdFormListeners = () => {
  adForm.addEventListener('submit', onAddFormSubmit);
  timeInItem.addEventListener('change', onTimeInItemChange);
  timeoutItem.addEventListener('change', onTimeOutItemChange);
  typeSelect.addEventListener('change', onTypeSelectChange);
  priceInput.addEventListener('change', onTypeSelectChange);
};

export {setAdFormListeners};
