export class FormValidator{
  constructor(config, element){
    this.formSelector = config.formSelector
    this.inputSelector = config.inputSelector
    this.submitButtonSelector = config.submitButtonSelector
    this.inactiveButtonClass = config.inactiveButtonClass
    this.inputErrorClass = config.inputErrorClass
    this.errorClass = config.errorClass
    this.formElement = element
  }
  _showInputError (inputElement){
    this.errorMessage = inputElement.validationMessage
    this.errorElement = this.formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.add(this.inputErrorClass);
    this.errorElement.textContent = this.errorMessage;
    this.errorElement.classList.add(this.errorClass);
  };

  _hideInputError (inputElement){
    this.errorElement = this.formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.remove(this.inputErrorClass);
    this.errorElement.classList.remove(this.errorClass);
    this.errorElement.textContent = '';
  };

  _checkInputValidity (inputElement)  {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
  } else {
    this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput () {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState () {

    if (this._hasInvalidInput()) {
      this.buttonElement.classList.add(this.inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      console.log(this.buttonElement)
      this.buttonElement.classList.remove(this.inactiveButtonClass);
      this.buttonElement.disabled = '';
    }
  };

  _setEventListeners () {
    this.inputList = Array.from(this.formElement.querySelectorAll(this.inputSelector));

    this.buttonElement = this.formElement.querySelector(this.submitButtonSelector);
    this._toggleButtonState();
    this.inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        console.log(inputElement.validity.valid)
        this._toggleButtonState();
      });
    });
  };

  enableValidation(){
    this._setEventListeners();
    }
}
