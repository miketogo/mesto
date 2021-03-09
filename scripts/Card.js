import {image , imageTitle, openPopup, popupImage} from "./index.js"
export class Card {
  constructor(title, photo, element){
    this.cardPhoto = photo;
    this.cardTitle = title;
    this.element = element;
  }

  _getTemplate(){
  const elementTemplate = document.querySelector('#element').content;
  const cardElement = elementTemplate.querySelector(`.${this.element}`).cloneNode(true);
  return cardElement
  }

  generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this.cardPhoto;
    this._element.querySelector('.element__image').alt = this.cardTitle;
    this._element.querySelector('.element__title').textContent = this.cardTitle;
    return this._element
  }

  _setEventListeners(){
    this._element.querySelector('.element__image').addEventListener('click', function (evt) {


      const item = evt.target;
      console.log(item)
      openPopup(popupImage)
      image.src = item.src
      image.alt = item.alt
      imageTitle.textContent = item.alt
  });
    this._element.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
  });
    this._element.querySelector('.element__trash').addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
  });
  }
}


