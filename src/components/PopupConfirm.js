'use strict';
import Popup from "./Popup.js";

export default class PopupConfirm extends Popup{
  constructor({popupSelector, submit}){
    super(popupSelector);
    this._submit = submit;
    this._formElement = popupSelector.querySelector('.popup__form');
    }

    setEventListeners(){
      super.setEventListeners();
      this.popup.querySelector('.popup__form').addEventListener('submit', this._submitForm.bind(this));


    }
    open(target, cardId){
      super.open()
      this.target = target;
      this.cardId = cardId;
    }

    _submitForm(){
      this._submit(this.target, this.cardId);
    }
}
