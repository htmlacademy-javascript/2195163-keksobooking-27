const getData = (onSuccess, onFail) => {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      onFail('Не удалось получить данные');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail ('Не удалось установить соединение с сервером. Попробуйте ещё раз');
      }
    }
    )
    .catch(() => {
      onFail ('Не удалось отправить форму. Попробуйте ещё раз');
    });
};


export { getData, sendData };
