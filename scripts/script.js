const editButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('#closeProfile');
const closeAddButton = document.querySelector('#closeAdd');
const closeImageButton = document.querySelector('#closeImage');
const popupProfile = document.querySelector('#ProfileEdit');
const popupAddCard = document.querySelector('#AddCard');
const popupImage = document.querySelector('#ImagePopup');
const nameText = document.querySelector('.profile__info-name');
const jobText = document.querySelector('.profile__info-job');
const nameInput = document.querySelector('.popup__text-input_type_name');
const jobInput = document.querySelector('.popup__text-input_type_job');
const titleInput = document.querySelector('#title');
const photoInput = document.querySelector('#photo');
const ProfileformElement = document.querySelector('#editProfileForm');
const AddformElement = document.querySelector('#addCardForm');
const addButton = document.querySelector('.profile__add-button')
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const elementTemplate = document.querySelector('#element').content;
const elementsSection = document.querySelector('.elements');

initialCards.forEach(function (item) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__image').alt = item.name;
  cardElement.querySelector('.element__title').textContent = item.name;
  cardElement.querySelector('.element__image').addEventListener('click', function (evt) {
    const item = evt.target;
    popupImageOpen(item);
});
  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
});
  const deleteButton = cardElement.querySelector('.element__trash');
  deleteButton.addEventListener('click', function () {
  const listItem = deleteButton.closest('.element');
  listItem.remove();
});
  elementsSection.append(cardElement);
});


function popupProfileOpen(){
  popupProfile.classList.add('popup_active')
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
};

function popupProfileClose(){
  popupProfile.classList.remove('popup_active')
};

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
    popupProfileClose();
}

function popupAddCardOpen(){
  popupAddCard.classList.add('popup_active')

};

function popupAddCardClose(){
  titleInput.value = '';
  photoInput.value = '';
  popupAddCard.classList.remove('popup_active')
};

function handleAddFormSubmit (evt) {
    evt.preventDefault();
    const title = titleInput.value;
    const photo = photoInput.value;
    popupAddCardClose();
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__image').src = photo;
    cardElement.querySelector('.element__image').alt = title;
    cardElement.querySelector('.element__image').addEventListener('click', function (evt) {
      item = evt.target;
      popupImageOpen(item);
  });
    cardElement.querySelector('.element__title').textContent = title;
    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
  });
    const deleteButton = cardElement.querySelector('.element__trash');
    deleteButton.addEventListener('click', function () {
    const listItem = deleteButton.closest('.element');
    listItem.remove();
  });
    elementsSection.prepend(cardElement);
    titleInput.value = '';
    photoInput.value = '';

}


editButton.addEventListener('click', popupProfileOpen);
closeProfileButton.addEventListener('click', popupProfileClose);
ProfileformElement.addEventListener('submit', handleFormSubmit);
addButton.addEventListener('click', popupAddCardOpen);
closeAddButton.addEventListener('click', popupAddCardClose);
AddformElement.addEventListener('submit', handleAddFormSubmit);
closeImageButton.addEventListener('click', popupImageClose);

function popupImageOpen(item){
  popupImage.classList.add('image-popup_active')
  popupImage.querySelector('.image-popup__image').src = item.src;
  popupImage.querySelector('.image-popup__title').textContent = item.alt;
  popupImage.querySelector('.image-popup__image').alt = item.alt;
};

function popupImageClose(){
  popupImage.classList.remove('image-popup_active')
};
