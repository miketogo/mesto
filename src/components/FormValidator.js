export default class FormValidator{
  constructor(config, element){
    this._formSelector = config.formSelector
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._formElement = element
  }
  _showInputError (inputElement){
    this.errorMessage = inputElement.validationMessage
    this.errorElement = this._formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.add(this._inputErrorClass);
    this.errorElement.textContent = this.errorMessage;
    this.errorElement.classList.add(this._errorClass);
  };

  _hideInputError (inputElement){
    this.errorElement = this._formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.remove(this._inputErrorClass);
    this.errorElement.classList.remove(this._errorClass);
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
      this.buttonElement.classList.add(this._inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      console.log(this.buttonElement)
      this.buttonElement.classList.remove(this._inactiveButtonClass);
      this.buttonElement.disabled = '';
    }
  };

  _setEventListeners () {
    this.inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    console.log(this.inputList)
    this.buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this.inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        console.log(inputElement.validity.valid)
        this._toggleButtonState();
      });
    });
    this._formElement.addEventListener('reset', () => {
      this.inputList.forEach((inputElement) => {
          this._hideInputError(inputElement)
          this._toggleButtonState(this.inputList, this.buttonElement);
      })
  });
  };

  enableValidation(){
    this._setEventListeners();
    }
}
