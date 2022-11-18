const slider = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');

const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: Number(priceField.max),
    },
    start: 5000,
    step: 1,
    connect: 'lower',
    format: {
      to: (value) => value.toFixed(0),
      from: (value) => parseFloat(value),
    },
  });
};

const onSliderInputUpdate = () => (priceField.value = slider.noUiSlider.get());
const onInputSliderChange = (evt) =>
  slider.noUiSlider.set(evt.currentTarget.value);

const addSliderListeners = () => {
  slider.noUiSlider.on('update', onSliderInputUpdate);
  priceField.addEventListener('change', onInputSliderChange);
};

const initSlider = () => {
  createSlider();
  addSliderListeners();
};

export { initSlider, createSlider };
