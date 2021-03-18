export const editButton = document.querySelector('.profile__edit-button');
export const closeProfileButton = document.querySelector('#closeProfile');
export const closeAddButton = document.querySelector('#closeAdd');
export const closeImageButton = document.querySelector('#closeImage');
export const popupProfile = document.querySelector('#Profile');
export const popupAddCard = document.querySelector('#AddCard');
export const popupImage = document.querySelector('#Image');
export const nameText = document.querySelector('.profile__info-name');
export const jobText = document.querySelector('.profile__info-job');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const titleInput = document.querySelector('#title');
export const photoInput = document.querySelector('#photo');
export const profileformElement = document.querySelector('#editProfileForm');
export const addformElement = document.querySelector('#addCardForm');
export const addButton = document.querySelector('.profile__add-button')
export const image = document.querySelector('.popup__image')
export const imageTitle = popupImage.querySelector('.popup__title_type_image')
export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

export const elementsSection = document.querySelector('.elements');
export const popupBackgrounds = Array.from(document.querySelectorAll('.popup'))
