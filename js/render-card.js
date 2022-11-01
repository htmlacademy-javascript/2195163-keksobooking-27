const mapCanvas = document.querySelector('.map__canvas');
const cardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');

const TypeToName = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом',
  palace: 'Дворец',
};

const renderTextBlock = (parent, cssClass, data, additionalText = '') => {
  const element = parent.querySelector(cssClass);
  if (!data) {
    element.remove();
    return;
  }
  element.textContent = `${data}${additionalText}`;
};

const renderAvatarBlock = (parent, cssClass, data) => {
  const element = parent.querySelector(cssClass);
  if (!data) {
    element.remove();
    return;
  }
  element.src = data;
};

const timeText = (offer) => {
  if(offer.checkin && offer.checkout){
    return `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else if(offer.checkin && !offer.checkout){
    return `Заезд после ${offer.checkin}`;
  } else if(!offer.checkin && offer.checkout){
    return `Выезд до ${offer.checkout}`;
  }
  return '';
};

const numberRoomGuest = (offer) => {
  if(offer.rooms && offer.guests){
    return `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else if(offer.rooms && !offer.guests){
    return `${offer.rooms} комнаты`;
  } else if(!offer.rooms && offer.guests){
    return `Для ${offer.guests} гостей`;
  }
  return '';
};

const renderPhotoBlock = (parent, cssClass, data) => {
  const element = parent.querySelector(cssClass);
  if (!data) {
    element.remove();
    return;
  }
  element.src = data;
};

const renderPhoto = (photos) => {
  for (let i = 0; i < photos.length; i++) {
    photos = photos[i];
    return photos;
  }
};

const createCardTemplate = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  renderTextBlock(cardElement, '.popup__title', data.offer.title);
  renderTextBlock(cardElement, '.popup__text--address', data.offer.address);
  renderTextBlock(
    cardElement,
    '.popup__text--price',
    data.offer.price,
    ' ₽/ночь'
  );
  renderTextBlock(cardElement, '.popup__type', TypeToName[data.offer.type]);
  renderTextBlock(cardElement, '.popup__description', data.offer.description);
  renderAvatarBlock(cardElement, '.popup__avatar', data.author.avatar);
  renderTextBlock(
    cardElement,
    '.popup__text--capacity',
    numberRoomGuest(data.offer)
  );
  renderTextBlock(
    cardElement,
    '.popup__text--time',
    timeText(data.offer)
  );
  renderPhotoBlock(cardElement, '.popup__photo', renderPhoto(data.offer.photos));

  return cardElement;
};

const renderCard = (data) => mapCanvas.append(createCardTemplate(data));

export { renderCard };
