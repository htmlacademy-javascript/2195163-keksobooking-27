import { createOffers } from './create-offers.js';
const mapCanvas = document.querySelector('#map__canvas');
const cardTemlate = document
  .querySelector('#card')
  .content.querySelector('.popup');

const renderOfferCard = (offerItem) => {
  const cardElement = cardTemlate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent =
    offerItem.offer.title;
  cardElement.querySelector('.popup__text--address').innerHTML =
    offerItem.offer.address;
  cardElement.querySelector(
    '.popup__text--price'
  ).innerHTML = `${offerItem.offer.price} ₽/ночь`;
  cardElement.querySelector('img').src = offerItem.author.avatar;

  const getTypeRu = () => {
    switch (offerItem.offer.type) {
      case 'bungalow':
        return 'Бунгало';
      case 'flat':
        return 'Квартира';
      case 'house':
        return 'Дом';
      case 'palace':
        return 'Дворец';
    }
  };
  cardElement.querySelector('.popup__type').textContent = getTypeRu(
    offerItem.offer.type
  );

  cardElement.querySelector(
    '.popup__text--capacity'
  ).textContent = `${offerItem.offer.rooms} комнаты для ${offerItem.offer.guests} гостей`;
  cardElement.querySelector(
    '.popup__text--time'
  ).textContent = `Заезд после${offerItem.offer.checkin}, выезд до ${offerItem.offer.checkout}`;

  const similarFeaturesList = cardElement.querySelector('.popup__features');
  const featureList = offerItem.offer.features;
  similarFeaturesList.innerHTML = '';
  for (let i = 0; i < featureList.length; i++) {
    const element = `<li class='popur__feature popur__feature--${featureList[i]}'></li>`;
    similarFeaturesList.insertAdjacentHTML('beforeend', element);
  }
  cardElement.querySelector('.popup__description').textContent =
    offerItem.offer.description;

  const photosGallery = cardElement.querySelector('.popup__photos');
  const photoList = offerItem.offer.photos;
  photosGallery.innerHTML = '';
  for (let i = 0; i < photoList.length; i++) {
    const element = `<img src='${photoList[i]}' class='popup__photo' width='50' height='40' alt='Изоброжение места'></img>`;

    photosGallery.insertAdjacentHTML('beforeend', element);
  }

  return cardElement;
};

mapCanvas.append(renderOfferCard(createOffers[0]));

export { renderOfferCard };
