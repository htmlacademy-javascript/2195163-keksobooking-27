const adForm = document.querySelector('.ad-form');
const capacityItem = document.querySelector('#capacity');
const roomNumberItem = document.querySelector('#room_number');

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

const validateCapacity = () => roomsToGuests[roomNumberItem.value].includes(capacityItem.value);

const getCapacityErrorMessage = () =>
  `Указанное количество комнта вмещает ${roomsToGuests[roomNumberItem.value].join(' или ')} комнаты.`;

const getRoomNumberErrorMessage = () =>
  `Для указанного количества гостей требуется ${guestsToRooms[capacityItem.value].join(' или ')} комнаты.`;

const onCapacityItemChange = () => {
  pristine.validate(capacityItem);
  pristine.validate(roomNumberItem);
};

const onRoomNumberItemChange = () => {
  pristine.validate(capacityItem);
  pristine.validate(roomNumberItem);
};

capacityItem.addEventListener('change', onCapacityItemChange);
roomNumberItem.addEventListener('change', onRoomNumberItemChange);

pristine.addValidator(capacityItem, validateCapacity, getCapacityErrorMessage);

pristine.addValidator(roomNumberItem, validateCapacity, getRoomNumberErrorMessage);

const validateForm = () => pristine.validate();

export {validateForm};