import {renderCard} from './render-card.js';
import {createOffers} from './create-offers.js';
import {deactivateForms, activateForms} from './forms-states.js';
import {setAdFormListeners} from './ad-form-listeners.js';

const offer = createOffers()[0];
renderCard(offer);
deactivateForms();
activateForms();
setAdFormListeners();

