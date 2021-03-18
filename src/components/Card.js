export default class Card {
  constructor(title, photo, element, handleCardClick){
    this.cardPhoto = photo;
    this.cardTitle = title;
    this.element = element;
    this.handleCardClick = handleCardClick;
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
    this.handleCardClick();
    this._element.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
  });
    this._element.querySelector('.element__trash').addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
  });
  }
}


