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



initialCards.forEach(function (item) {
  const cardPhoto = item.link;
  const cardTitle = item.name;
  addCard(cardTitle, cardPhoto)

});


function openPopup(popup){
    popup.classList.add('popup_active')
};

function closePopup(popup){
    popup.classList.remove('popup_active')
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
    addCard(cardTitle, cardPhoto);
    popup = "addCard"
    closePopup(popup)
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
  openPopup(popupAddCard)
});

closeAddButton.addEventListener('click', function () {
  titleInput.value = '';
  photoInput.value = '';
  closePopup(popupAddCard)
});

addformElement.addEventListener('submit', handleAddFormSubmit);

closeImageButton.addEventListener('click', function () {
  closePopup(popupImage)
});

function addCard(cardTitle, cardPhoto){
  elementsSection.prepend(createCard(cardTitle, cardPhoto));
}

function createCard(cardTitle, cardPhoto){
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const cardPhotoElement = cardElement.querySelector('.element__image');
  cardPhotoElement.src = cardPhoto;
  cardPhotoElement.alt = cardTitle;
  cardElement.querySelector('.element__title').textContent = cardTitle;
  cardPhotoElement.addEventListener('click', function (evt) {
    const item = evt.target;
    popup = "image";
    openPopup(popupImage);
    const image = popupImage.querySelector('.popup__image')
    image.src = item.src;
    popupImage.querySelector('.popup__title_type_image').textContent = item.alt;
    image.alt = item.alt;
});
  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
});
  const deleteButton = cardElement.querySelector('.element__trash');
  deleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
});
return cardElement;

}
