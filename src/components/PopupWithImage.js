import Popup from "./Popup.js";
// import {image , imageTitle} from "../utilis/constants.js"
export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector)
    this._imege = document.querySelector('.popup__image');
    this._imegeTitle = popupSelector.querySelector('.popup__title_type_image');
  }
  open(item){
    super.open()
    this._imege.src = item.src
    this._imege.alt = item.alt
    this._imegeTitle.textContent = item.alt
  }
}

