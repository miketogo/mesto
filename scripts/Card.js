
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
      const image = document.querySelector('.popup__image')
      const imageTitle = document.querySelector('.popup__title_type_image')
      const item = evt.target;
      console.log(item)
      document.querySelector('#Image').classList.add('popup_active')
      document.addEventListener('keydown', closePopupByEscape)
      image.src = item.src
      image.alt = item.alt
      imageTitle.textContent = item.alt
      function closePopupByEscape (evt){
        if (evt.key === "Escape") {
          closePopup(document.querySelector('.popup_active'))
        }
      }
      function closePopup(popup){
        popup.classList.remove('popup_active')
        document.removeEventListener('keydown', closePopupByEscape)
      };
  });
    this._element.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
  });
    this._element.querySelector('.element__trash').addEventListener('click', function (evt) {
      evt.target.closest('.element').remove();
  });
  }
}


