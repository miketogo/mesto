export default class Card {
  constructor(title, photo, element, handleCardClick){
    this._cardPhoto = photo;
    this._cardTitle = title;
    this._element = element;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate(){
  const _elementTemplate = document.querySelector('#element').content;
  const _cardElement = _elementTemplate.querySelector(`.${this._element}`).cloneNode(true);
  return _cardElement
  }

  generateCard(){
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector('.element__image').src = this._cardPhoto;
    this._cardElement.querySelector('.element__image').alt = this._cardTitle;
    this._cardElement.querySelector('.element__title').textContent = this._cardTitle;
    return this._cardElement
  }

  _setEventListeners(){

    this._cardElement.querySelector('.element__image').addEventListener('click', this._handleCardClick.bind(this))

    this._cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
  });
    this._cardElement.querySelector('.element__trash').addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
  });
  }
}


