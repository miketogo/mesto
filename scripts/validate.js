const element = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}





const showInputError = (formElement, inputElement, errorMessage, element) => {
  console.log(inputElement)
  console.log(formElement)
  const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
  inputElement.classList.add(element.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(element.errorClass);
};

const hideInputError = (formElement, inputElement, element) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
  inputElement.classList.remove(element.inputErrorClass);
  errorElement.classList.remove(element.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, element) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, element);
} else {
    hideInputError(formElement, inputElement, element);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, element) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(element.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(element.inactiveButtonClass);
    buttonElement.disabled = '';
  }
};

const setEventListeners = (formElement, element) => {
  const inputList = Array.from(formElement.querySelectorAll(element.inputSelector));
  const buttonElement = formElement.querySelector(element.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, element);
  console.log(inputList)
  inputList.forEach((inputElement) => {

    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, element);
      toggleButtonState(inputList, buttonElement, element);
    });
  });
};

const enableValidation = (element) => {

  const formList = Array.from(document.querySelectorAll(element.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, element);
  });
};


