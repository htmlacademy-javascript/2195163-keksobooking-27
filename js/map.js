import {activateAdForm, activateFiltersForm} from './forms-states.js';
import {renderCard} from './render-card.js';
import {setAdFormListeners} from './ad-form-listeners.js';
import {initSlider} from './slider.js';

const START_LOCATION = {
  lat: 35.68172,
  lng: 139.75392,
};

const DECIMALS = 5;
const MAP_ZOOM = 12;

const addressInput = document.querySelector('#address');
const interactiveMap = L.map('map-canvas');
const markerGroup = L.layerGroup();

let interactiveMarker;
let marker;

const setStartAddressValue = () => {
  addressInput.value = `${START_LOCATION.lat}, ${START_LOCATION.lng}`;
};

const setLocation = (target) => {
  const location = target.getLatLng();
  addressInput.value = `${location.lat.toFixed(DECIMALS)}, ${location.lng.toFixed(DECIMALS)}`;
};

const addMarkerGroup = (data) => {
  markerGroup.addTo(interactiveMap);
  data.forEach((offer) => {
    marker = L.marker(offer.location, {
      icon: L.icon({
        iconUrl: './img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      }),
    });
    marker.addTo(markerGroup).bindPopup(renderCard(offer));
  });
};

const onMarkerMove = (evt) => setLocation(evt.target);

const setAdFormStartState = (data) => {
  activateAdForm();
  setAdFormListeners();
  setStartAddressValue();
  initSlider();
  addMarkerGroup(data);
};

const initMap = (data) => {
  interactiveMap
    .on('load', () => {
      setAdFormStartState(data);
      activateFiltersForm();
    })
    .setView(START_LOCATION, MAP_ZOOM);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    foo: 'bar',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(interactiveMap);

  interactiveMarker = L.marker(START_LOCATION, {
    draggable: 'true',
    icon: L.icon({
      iconUrl: './img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    }),
  }).addTo(interactiveMap);

  interactiveMarker.on('move', onMarkerMove);
};

const resetMap = () => {
  if(interactiveMarker) {
    interactiveMarker.remove();
  }
  initMap();
  addressInput.value = `${START_LOCATION.lat}, ${START_LOCATION.lng}`;
};
export {initMap, resetMap};
