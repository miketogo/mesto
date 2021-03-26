export default class Card {
  constructor( element, handleCardClick, handleDeleteCard, handleLikeAdd, handleLikeRemove, data, userId){
    this._likeCount = data.likes.length
    this._cardPhoto = data.link;
    this._cardTitle = data.name;
    this._element = element;
    this._handleCardClick = handleCardClick;
    this._userId = data.owner._id
    this._ownerId = userId
    this._handleDeleteCard = handleDeleteCard
    this._cardId = data._id
    this._handleLikeAdd = handleLikeAdd
    this._handleLikeRemove = handleLikeRemove
    this._likes = data.likes
  }

  _getTemplate(){
  const _elementTemplate = document.querySelector(`#${this._element}`).content;
  const _cardElement = _elementTemplate.querySelector(`.${this._element}`).cloneNode(true);
  return _cardElement
  }

  generateCard(){
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    console.log(this._likes)
    this._cardElement.querySelector('.element__image').src = this._cardPhoto;
    this._cardElement.querySelector('.element__image').alt = this._cardTitle;
    this._cardElement.querySelector('.element__title').textContent = this._cardTitle;
    this._likes.forEach(item => {
      if (item._id == this._ownerId){
        this._cardElement.querySelector('.element__like').classList.toggle('element__like_active');
      }
    });
    // if (this._likes.forEach())){
    //   this._cardElement.querySelector('.element__like').classList.toggle('element__like_active');
    // }
    this._cardElement.querySelector('.element__like-coutner').textContent = this._likeCount;
    if (this._userId != this._ownerId){
      this._cardElement.querySelector('.element__trash').remove()
    }
    return this._cardElement
  }

  _setEventListeners(){

    this._cardElement.querySelector('.element__image').addEventListener('click', this._handleCardClick.bind(this))

    this._cardElement.querySelector('.element__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like_active');

      this._handleLike(evt.target)
  });
    this._cardElement.querySelector('.element__trash').addEventListener('click', (evt) => {
      this._handleDeleteCard(evt.target, this._cardId)

  });
  }
  _handleLike(target){
    if (target.classList.contains('element__like_active')){
      this._handleLikeAdd(this._cardId, this._cardElement)
    } else{
      this._handleLikeRemove(this._cardId, this._cardElement)
    }
  }
}


