import {createOffers} from './create-offers.js';
import {deactivateForms, activateForms, setAdress} from './forms-states.js';
import {setAdFormListeners} from './ad-form-listeners.js';
import {initMap, setOnMapLoad, setOnMainPinMove, setAdPins} from './create-map.js';

const offer = createOffers();

deactivateForms();
setAdFormListeners();
const startCoordinate = {
  lat: 35.66023,
  lng: 139.73007,
};

setOnMapLoad(()=> {
  setOnMainPinMove(setAdress);
  setAdress(startCoordinate);
  activateForms();
  setAdPins(offer);
});
initMap(startCoordinate);
