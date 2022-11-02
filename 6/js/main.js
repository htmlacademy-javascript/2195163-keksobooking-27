import {renderCard} from './render-card.js';
import {createOffers} from './create-offers.js';
import {switchAdFormState} from './form.js';

const offer = createOffers()[0];
console.log(offer);
renderCard(offer);
switchAdFormState();
