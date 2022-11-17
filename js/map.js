import {renderGetErrorMessage} from './error.js';
import {getData} from './api.js';
import {activateFiltersForm} from './forms-states.js';
import {renderCard} from './render-card.js';
import {setAdFormAction} from './ad-form-action.js';
import {filterOffers, onFiltersChange} from './ad-filter.js';
import {debounce} from './util.js';

const START_LOCATION = {
  lat: 35.68172,
  lng: 139.75392,
};

const DECIMALS = 5;
const MAP_ZOOM = 12;
const OFFERS_COUNTER = 10;

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
  data
    .slice(0, OFFERS_COUNTER)
    .forEach((offer) => {
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

const onDataFailed = () => {
  const mapForm = document.querySelector('.map__filters');
  const mapFormSelects = mapForm.querySelectorAll('select');
  const mapFormFieldsets = mapForm.querySelectorAll('fieldset');
  mapForm.classList.add('map__filters--disabled');
  renderGetErrorMessage();
  activateFiltersForm(mapFormSelects, false);
  activateFiltersForm(mapFormFieldsets, false);
};


const onDataLoad = (data) => {
  const filteredOffers = filterOffers(data);
  addMarkerGroup(filteredOffers.slice(0, OFFERS_COUNTER));
};

const setFilteredMarkers = () => {
  getData((offers) => {
    onDataLoad(offers);
    onFiltersChange(debounce(() => {
      markerGroup.clearLayers();
      onDataLoad(offers);
    }));
  }, onDataFailed);
};

const setAdFormStartState = () => {
  setAdFormAction();
  setStartAddressValue();
};

const resetMap = () => {
  interactiveMarker.setLatLng(START_LOCATION);
  interactiveMap.setView(START_LOCATION, MAP_ZOOM);
};

const getDataCallback = (data) => {
  setFilteredMarkers();
  activateFiltersForm();
  onDataLoad(data);
};

const initMap = () => {
  interactiveMap
    .on('load', () => {
      setAdFormStartState();
      getData(getDataCallback, renderGetErrorMessage);
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


export {initMap, setStartAddressValue, resetMap};
