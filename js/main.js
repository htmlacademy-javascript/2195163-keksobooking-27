import {renderCard} from './render-card.js';
import {createOffers} from './create-offers.js';

const offer = createOffers()[0];
console.log(offer);
renderCard(offer);
