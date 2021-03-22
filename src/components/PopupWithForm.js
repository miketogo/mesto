'use strict';
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor({popupSelector, submit}){
    super(popupSelector);
    this._submit = submit;
    this._formElement = popupSelector.querySelector('.popup__form');
    }
    _getInputValues(){

      this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
      console.log(this._inputList)
      this._formValues = {};
      this._inputList.forEach((input) => this._formValues[input.name] = input.value);
      console.log(this._formValues)
      return this._formValues;
    }
    setEventListeners(){
      super.setEventListeners();
      this.popup.querySelector('.popup__form').addEventListener('submit', this._submitForm.bind(this));


    }
    close(){



      this._formElement.reset();
      super.close();
    }

    _submitForm(){
      this._submit(this._getInputValues());
      this.close()
    }
}
