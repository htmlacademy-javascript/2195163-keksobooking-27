const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1','2','3'],
  100: ['0'],
};

const guestsToRooms = {
  0: ['100'],
  1: ['1','2','3'],
  2: ['2', '3'],
  3: ['3'],
};


const adForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');
const adFormInteractiveItems = adForm.querySelectorAll('fieldset');
const filtersFormInteractiveItems = filtersForm.querySelectorAll('fieldset, select');
const capacityElement = adForm.querySelector('#capacity');
const roomNumberElement = adForm.querySelector('#room_number');

const pristine = new Pristine(
  adForm,
  {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    errorTextParent: 'ad=form__element',
  },
  true
);

const deactivateAdForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormInteractiveItems.forEach((item) => item.disabled = true);
};

const deactivateFiltersForm = () => {
  filtersForm.classList.add('map__filters--disabled');
  filtersFormInteractiveItems.forEach((item) => item.disabled = true);
};

const activateAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormInteractiveItems.forEach((item) => item.disabled = false);
};

const activateFiltersForm = () => {
  filtersForm.classList.remove('map__filters--disabled');
  filtersFormInteractiveItems.forEach((item) => item.disabled = false);
};

const deactivateForms = () => {
  deactivateAdForm();
  deactivateFiltersForm();
};

const activateForms = () => {
  activateAdForm();
  activateFiltersForm();
};

const validateCapacity = () =>
  roomsToGuests[roomNumberElement.value].includes(capacityElement.value);

const getCapacityErrorMessage = () =>
  `Указанное количество комнта вмещает ${roomsToGuests[roomNumberElement.value].join(' или ')} комнаты.`;

const getRoomMubmerErrorMessage = () =>
  `Для указанного количества гостей требуется ${guestsToRooms[capacityElement.value].join(' или ')} комнаты.`;

const onCapacityChange = () => {
  pristine.validate(capacityElement);
  pristine.validate(roomNumberElement);
};

const onRoomNumberChange = () => {
  pristine.validate(capacityElement);
  pristine.validate(roomNumberElement);
};

capacityElement.addEventListener('change', onCapacityChange);
roomNumberElement.addEventListener('change', onRoomNumberChange);


pristine.addValidator(
  capacityElement,
  validateCapacity,
  getCapacityErrorMessage
);
pristine.addValidator(
  roomNumberElement,
  validateCapacity,
  getRoomMubmerErrorMessage
);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if(isValid) {
    console.log('Можно отправлять');
  } else {
    console.log(pristine.getErrors());
  }
});

export{deactivateForms, activateForms};

