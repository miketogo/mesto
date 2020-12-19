let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let nameText = document.querySelector('.profile__info-name');
let jobText = document.querySelector('.profile__info-job');
let nameInput = document.querySelector('.popup__text-input_type_name');
let jobInput = document.querySelector('.popup__text-input_type_job');
let formElement = document.querySelector('.popup__form')

function PopupOpen(){
  popup.classList.add('popup_active')
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
};

function PopupClose(){
  popup.classList.remove('popup_active')
};

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameText.textContent = nameInput.value;
    jobText.textContent = jobInput.value;
    PopupClose();
}

editButton.addEventListener('click', PopupOpen);
closeButton.addEventListener('click', PopupClose);
formElement.addEventListener('submit', handleFormSubmit);
