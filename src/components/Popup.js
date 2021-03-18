import {closeAddButton, closeProfileButton, closeImageButton} from "../utilis/constants.js"

export default class Popup {
  constructor(popupSelector){
    this.popup = popupSelector;
  }
  open(){
    this.setEventListeners()
    this.popup.classList.add('popup_active')
    document.addEventListener('keydown', this._handleEscClose.bind(this))
  }
  close(){
    this.popup.classList.remove('popup_active')
    document.removeEventListener('keydown', this._handleEscClose.bind(this))
  }
  _handleEscClose(evt){
    if (evt.key === "Escape") {
      this.close()
    }
  }
  setEventListeners(){
    console.log(closeAddButton)
    closeAddButton.addEventListener('click', this.close.bind(this));
    closeProfileButton.addEventListener('click', this.close.bind(this));
    closeImageButton.addEventListener('click', this.close.bind(this));
  }
}
