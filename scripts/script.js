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
const profileformElement = document.querySelector('#editProfileForm');
const addformElement = document.querySelector('#addCardForm');
const addButton = document.querySelector('.profile__add-button')
const elementTemplate = document.querySelector('#element').content;
const elementsSection = document.querySelector('.elements');

function createCard(cardTitle, cardPhoto){
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardPhotoElement = cardElement.querySelector('.element__image');
  cardPhotoElement.src = cardPhoto;
  cardPhotoElement.alt = cardTitle;
  cardElement.querySelector('.element__title').textContent = cardTitle;
  cardPhotoElement.addEventListener('click', function (evt) {
    const item = evt.target;
    popup = "image";
    openPopup(popup, item);
});
  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
});
  const deleteButton = cardElement.querySelector('.element__trash');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
});
  elementsSection.prepend(cardElement);
}

initialCards.forEach(function (item) {
  const cardPhoto = item.link;
  const cardTitle = item.name;
 createCard(cardTitle, cardPhoto);

});


function openPopup(popup, item){
  if (popup === "profile") {
    popupProfile.classList.add('popup_active')
    nameInput.value = nameText.textContent;
    jobInput.value = jobText.textContent;
  } else if (popup === "addCard"){
    popupAddCard.classList.add('popup_active')
  } else if (popup === "image"){
    popupImage.classList.add('popup_active')
    const image = popupImage.querySelector('.popup__image')
    image.src = item.src;
    popupImage.querySelector('.popup__title').textContent = item.alt;
    image.alt = item.alt;
  } else return

};

function closePopup(popup){
  if (popup === "profile") {
    popupProfile.classList.remove('popup_active')
  } else if (popup === "addCard"){
    titleInput.value = '';
    photoInput.value = '';
    popupAddCard.classList.remove('popup_active')
  } else if (popup === "image"){
    popupImage.classList.remove('popup_active')
  } else return

};

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
    popup = "profile"
    closePopup(popup)
}


function handleAddFormSubmit (evt) {
    evt.preventDefault();
    const cardTitle = titleInput.value;
    const cardPhoto = photoInput.value;
    createCard(cardTitle, cardPhoto);
    popup = "addCard"
    closePopup(popup)
    titleInput.value = '';
    photoInput.value = '';

}

let popup = "";

editButton.addEventListener('click', function () {
  popup = "profile"
  openPopup(popup)
});

closeProfileButton.addEventListener('click', function () {
  popup = "profile"
  closePopup(popup)
});

profileformElement.addEventListener('submit', handleProfileFormSubmit);

addButton.addEventListener('click', function () {
  popup = "addCard"
  openPopup(popup)
});

closeAddButton.addEventListener('click', function () {
  popup = "addCard"
  closePopup(popup)
});

addformElement.addEventListener('submit', handleAddFormSubmit);

closeImageButton.addEventListener('click', function () {
  popup = "image"
  closePopup(popup)
});
