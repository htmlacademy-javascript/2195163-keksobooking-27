const renderElement = (container, element) => {
  container.insertAdjacentHTML('beforeend', element);
};

const isEcsEvt = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEcsEvt, renderElement, debounce};
