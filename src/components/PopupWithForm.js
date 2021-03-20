import Popup from "./Popup.js";
import {nameInput, jobInput, titleInput, photoInput} from "../utilis/constants.js"

export default class PopupWithForm extends Popup{
  constructor({popupSelector, submit}){
    super(popupSelector);
    this._submit = submit;
    }
    _getInputValues(){
      this._formElement = this.popup.querySelector('.popup__form')
      this._inputList = this._formElement.querySelectorAll('.popup__input')
      console.log(this._inputList)
      this._formValues = {};
      this._inputList.forEach(input => this._formValues[input.name] = input.value);
      console.log(this._formValues)
      return this._formValues
    }
    setEventListeners(){
      super.setEventListeners();
      this.popup.querySelector('.popup__form').addEventListener('submit', this._submitForm.bind(this))


    }
    close(){
      super.close();
      this._formElement.reset()
    }

    _submitForm(){
      this._submit(this._getInputValues())
    }
}
