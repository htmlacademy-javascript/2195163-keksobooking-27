const adForm = document.querySelector('.ad-form');
const capacitySelect = document.querySelector('#capacity');
const roomNumberSelect = document.querySelector('#room_number');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const guestsToRooms = {
  0: ['100'],
  1: ['1', '2', '3'],
  2: ['2', '3'],
  3: ['3'],
};

const pristine = new Pristine(
  adForm,
  {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    errorTextParent: 'ad-form__element',
  },
  true,
);

const validateCapacity = () => roomsToGuests[roomNumberSelect.value].includes(capacitySelect.value);

const getCapacityErrorMessage = () =>
  `Указанное количество комнта вмещает ${roomsToGuests[roomNumberSelect.value].join(' или ')} комнаты.`;

const getRoomNumberErrorMessage = () =>
  `Для указанного количества гостей требуется ${guestsToRooms[capacitySelect.value].join(' или ')} комнаты.`;

const getPriceErrorMessage = () => `Цена выбранного типа жилья не менее ${minPrice[typeSelect.value]} рублей за ночь`;

const validatePrice = () => Number(priceInput.value) >= Number(minPrice[typeSelect.value]);

const onCapacitySelectChange = () => {
  pristine.validate(capacitySelect);
  pristine.validate(roomNumberSelect);
};

const onRoomNumberSelectChange = () => {
  pristine.validate(capacitySelect);
  pristine.validate(roomNumberSelect);
};


capacitySelect.addEventListener('change', onCapacitySelectChange);
roomNumberSelect.addEventListener('change', onRoomNumberSelectChange);

pristine.addValidator(priceInput, validatePrice, getPriceErrorMessage);
pristine.addValidator(capacitySelect, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(roomNumberSelect, validateCapacity, getRoomNumberErrorMessage);

const validateForm = () => pristine.validate();

export {validateForm};
