export default class Popup {
  constructor(popupSelector){
    this.popup = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this)
  }
  open(){
    this.popup.classList.add('popup_active')
    document.addEventListener('keydown', this._handleEscClose)
  }
  close(){
    this.popup.classList.remove('popup_active')
    document.removeEventListener('keydown', this._handleEscClose)
  }
  _handleEscClose(evt){
    if (evt.key === "Escape") {
      this.close()
    }
  }
  setEventListeners(){
    this.popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
    this.popup.addEventListener('mousedown', this._handleBackgroundClose.bind(this))
  }
  _handleBackgroundClose(evt){
    if (evt.target === evt.currentTarget) {
      this.close()
    };
  }
}
