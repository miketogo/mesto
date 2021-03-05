import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js"
const editButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('#closeProfile');
const closeAddButton = document.querySelector('#closeAdd');
const closeImageButton = document.querySelector('#closeImage');
const popupProfile = document.querySelector('#Profile');
const popupAddCard = document.querySelector('#AddCard');
const popupImage = document.querySelector('#Image');
const nameText = document.querySelector('.profile__info-name');
const jobText = document.querySelector('.profile__info-job');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const titleInput = document.querySelector('#title');
const photoInput = document.querySelector('#photo');
const profileformElement = document.querySelector('#editProfileForm');
const addformElement = document.querySelector('#addCardForm');
const addButton = document.querySelector('.profile__add-button')
const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

const elementsSection = document.querySelector('.elements');
const popupBackgrounds = Array.from(document.querySelectorAll('.popup'))

console.log(Card)
console.log(FormValidator)




initialCards.forEach(function (item) {
  const card = new Card(item.name, item.link, 'element');
  const cardElement = card.generateCard();
  elementsSection.append(cardElement);

});

popupBackgrounds.forEach((item) => {
  item.addEventListener('mousedown', function(evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(document.querySelector('.popup_active'))
    };
  })
})

function closePopupByEscape (evt){
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_active'))
  }
}

function openPopup(popup){
    popup.classList.add('popup_active')
    document.addEventListener('keydown', closePopupByEscape)
};

function closePopup(popup){
    popup.classList.remove('popup_active')
    document.removeEventListener('keydown', closePopupByEscape)
};

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
    closePopup(popupProfile)
}


function handleAddFormSubmit (evt) {
    evt.preventDefault();
    const cardTitle = titleInput.value;
    const cardPhoto = photoInput.value;
    const card = new Card(cardTitle, cardPhoto, 'element');
    const cardElement = card.generateCard();
    elementsSection.prepend(cardElement);
    closePopup(popupAddCard);
    titleInput.value = '';
    photoInput.value = '';

}

editButton.addEventListener('click', function () {
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
  openPopup(popupProfile)

});

closeProfileButton.addEventListener('click', function () {
  closePopup(popupProfile)
});

profileformElement.addEventListener('submit', handleProfileFormSubmit);

addButton.addEventListener('click', function () {
  titleInput.value = '';
  photoInput.value = '';
  openPopup(popupAddCard)
});

closeAddButton.addEventListener('click', function () {
  closePopup(popupAddCard)
});

addformElement.addEventListener('submit', handleAddFormSubmit);

closeImageButton.addEventListener('click', function () {
  closePopup(popupImage)
});


const formList = Array.from(document.querySelectorAll(configValidation.formSelector));
console.log(formList)
formList.forEach((formElement) => {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  console.log(formElement)
  const formValidate = new FormValidator(configValidation, formElement);
  formValidate.enableValidation();
});
