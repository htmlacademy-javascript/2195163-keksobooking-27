const adForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');
const adFormInteractiveItems = adForm.querySelectorAll('fieldset');
const filtersFormInteractiveItems = filtersForm.querySelectorAll('fieldset, select');

const deactivateAdForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormInteractiveItems.forEach((item) => (item.disabled = true));
};

const deactivateFiltersForm = () => {
  filtersForm.classList.add('map__filters--disabled');
  filtersFormInteractiveItems.forEach((item) => (item.disabled = true));
};

const activateAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormInteractiveItems.forEach((item) => (item.disabled = false));
};

const activateFiltersForm = () => {
  filtersForm.classList.remove('map__filters--disabled');
  filtersFormInteractiveItems.forEach((item) => (item.disabled = false));
};

const deactivateForms = () => {
  deactivateAdForm();
  deactivateFiltersForm();
};

const resetFilters = () => {
  adForm.reset();
  filtersForm.reset();
};

export {deactivateForms, activateAdForm, activateFiltersForm, resetFilters};
