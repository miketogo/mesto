import Card  from "../components/Card.js";
import FormValidator from "../components/FormValidator.js"
import {initialCards} from "../utilis/initial-сards.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from "../components/UserInfo.js"
import PopupWithImage from "../components/PopupWithImage.js"
import {editButton,
  closeProfileButton,
  closeAddButton,
  closeImageButton,
  popupProfile,
  popupAddCard,
  popupImage,
  nameText,
  jobText,
  nameInput,
  jobInput,
  titleInput,
  photoInput,
  profileformElement,
  addformElement,
  addButton,
  image,
  imageTitle,
  configValidation,
  elementsSection,
  popupBackgrounds
} from "../utilis/constants.js"
import './index.css'


console.log(Card)
console.log(FormValidator)


function handleCardClick (){
  this._element.querySelector('.element__image').addEventListener('click', function (evt) {


    const item = evt.target;
    console.log(item)
    const imagePopup = new PopupWithImage(popupImage)
    imagePopup.open(item)


});
}

 const cardsList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
      const card = new Card(cardItem.name, cardItem.link, 'element', handleCardClick);
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
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

const editPorofilePopup = new PopupWithForm({
  popupSelector: popupProfile,
  submit: () =>{
    function submit(evt){
      evt.preventDefault();
      userInfo.setUserInfo(editPorofilePopup._getInputValues())

      editPorofilePopup.close()
      profileformElement.removeEventListener('submit', submit)
    }
    profileformElement.addEventListener('submit', submit)}
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

const addCardPopup = new PopupWithForm({
  popupSelector: popupAddCard,
  submit: () =>{
    addformElement.addEventListener('submit', handleAddFormSubmit);
    function handleAddFormSubmit(evt)
    {evt.preventDefault();
    const cardTitle = titleInput.value;
    const cardPhoto = photoInput.value;
    const card = new Card(cardTitle, cardPhoto, 'element', handleCardClick);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
    addCardPopup.close()
    titleInput.value = '';
    photoInput.value = '';
    addformElement.removeEventListener('submit', handleAddFormSubmit)
  }

  }
})

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


