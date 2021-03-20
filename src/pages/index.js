import Card  from "../components/Card.js";
import FormValidator from "../components/FormValidator.js"
import {initialCards} from "../utilis/initial-сards.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from "../components/UserInfo.js"
import PopupWithImage from "../components/PopupWithImage.js"
import {editButton,
  popupProfile,
  popupAddCard,
  popupImage,
  nameInput,
  jobInput,
  titleInput,
  photoInput,
  addButton,
  configValidation,
} from "../utilis/constants.js"
import './index.css'


console.log(Card)
console.log(FormValidator)



function createCard(title, photo, template){
  const card = new Card(title, photo, template, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

const imagePopup = new PopupWithImage(popupImage)
imagePopup.setEventListeners()

const addCardPopup = new PopupWithForm({
  popupSelector: popupAddCard,
  submit: (values) =>{
    const cardTitle = titleInput.value;
    const cardPhoto = photoInput.value;
    cardsList.prependItem(createCard(cardTitle, cardPhoto, 'element'))

    addCardPopup.close()

  }
})
addCardPopup.setEventListeners()

const editPorofilePopup = new PopupWithForm({
  popupSelector: popupProfile,
  submit: (values) =>{
      userInfo.setUserInfo(values)
      editPorofilePopup.close()
      evt.preventDefault();
      userInfo.setUserInfo(editPorofilePopup._getInputValues())

      editPorofilePopup.close()


  }
})
editPorofilePopup.setEventListeners()

function handleCardClick (evt){
    imagePopup.open(evt.target)
}

 const cardsList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
      cardsList.addItem(createCard(cardItem.name, cardItem.link, 'element'));
    }
  },
  '.elements'
);
cardsList.renderItems()


// popupBackgrounds.forEach((item) => {
//   item.addEventListener('mousedown', function(evt) {
//     if (evt.target === evt.currentTarget) {
//       closePopup(document.querySelector('.popup_active'))
//     };
//   })
// })

// export function closePopupByEscape (evt){
//   if (evt.key === "Escape") {
//     closePopup(document.querySelector('.popup_active'))
//   }
// }

// export function openPopup(popup){
//     popup.classList.add('popup_active')
//     document.addEventListener('keydown', closePopupByEscape)
// };

// export function closePopup(popup){
//     popup.classList.remove('popup_active')
//     document.removeEventListener('keydown', closePopupByEscape)
// };

// function handleProfileFormSubmit (evt) {
//     evt.preventDefault();
//     nameText.textContent = nameInput.value;
//     jobText.textContent = jobInput.value;
//     closePopup(popupProfile)
// }


// function handleAddFormSubmit (evt) {
    // evt.preventDefault();
    // const cardTitle = titleInput.value;
    // const cardPhoto = photoInput.value;
    // const card = new Card(cardTitle, cardPhoto, 'element');
    // const cardElement = card.generateCard();
    // elementsSection.prepend(cardElement);
    // closePopup(popupAddCard);
    // titleInput.value = '';
    // photoInput.value = '';

// }

const userInfo = new UserInfo({
  nameSelector: '.profile__info-name',
  jobSelector: '.profile__info-job'
})


editButton.addEventListener('click', function () {
  // nameInput.value = nameText.textContent;
  // jobInput.value = jobText.textContent;
  // openPopup(popupProfile)
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  editPorofilePopup.open()



});

// closeProfileButton.addEventListener('click', function () {
//   closePopup(document.querySelector('.popup_active'))
// });



addButton.addEventListener('click', function () {
  // titleInput.value = '';
  // photoInput.value = '';
  // openPopup(popupAddCard)

  addCardPopup.open()
});

// closeAddButton.addEventListener('click', function () {
//   closePopup(document.querySelector('.popup_active'))
// });

// addformElement.addEventListener('submit', handleAddFormSubmit);

// closeImageButton.addEventListener('click', function () {
//   closePopup(document.querySelector('.popup_active'))
// });


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


