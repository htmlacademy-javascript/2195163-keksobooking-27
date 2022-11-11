import {deactivateForms} from './forms-states.js';
import {initMap} from './map.js';
import {getData,} from './api.js';
import {setUserFormSubmit} from './ad-form-listeners.js';

deactivateForms();
getData(initMap);
setUserFormSubmit();

