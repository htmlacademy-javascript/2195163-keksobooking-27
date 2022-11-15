import {isEcsEvt, renderElement} from './util.js';

const createSuccessTemplate = () => `<div class="success">
                                      <p class="success__message">Ваше объявление<br>успешно размещено!</p>
                                    </div>`;


const onSuccessClick = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.success')) {
    evt.target.closest('.success').remove();
    removeListeners();
  }
};

const onSuccessKeydown = (evt) => {
  evt.preventDefault();
  const successElement = document.querySelector('.success');
  if (isEcsEvt(evt) && successElement) {
    successElement.remove();
    removeListeners();
  }
};

const addListeners = () => {
  document.addEventListener('click', onSuccessClick);
  document.addEventListener('keydown', onSuccessKeydown);
};

function removeListeners() {
  document.removeEventListener('click', onSuccessClick);
  document.removeEventListener('keydown', onSuccessKeydown);
}

const renderSuccessMessage = () => {
  renderElement(document.body, createSuccessTemplate);
  addListeners();
};

export {renderSuccessMessage};
