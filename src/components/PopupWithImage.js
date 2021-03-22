import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._image = popupSelector.querySelector('.popup__image');
    this._imageTitle = popupSelector.querySelector('.popup__title_type_image');
  }
  open(item){
    super.open()
    this._image.src = item.src
    this._image.alt = item.alt
    this._imageTitle.textContent = item.alt
  }
}

