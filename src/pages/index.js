import Card  from "../components/Card.js";
import FormValidator from "../components/FormValidator.js"
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
  profileAvatrar,
  popupConfirm,
  addButton,
  configValidation,
  popupEditAvatar,
  profileAvatarButton
} from "../utilis/constants.js"
import './index.css'
import Api from "../components/Api.js"
import PopupConfirm from "../components/PopupConfirm.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  headers: {
    authorization: 'd94f3f5c-42c8-4dc8-aba6-4bc81ee9d748',
    'Content-Type': 'application/json'
  }
});
api.getInitialCards()
  .then((result)=>{
    console.log(result)
    result.forEach((item)=>{
      cardsList.renderItems(item)
    })
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  })

const cardsList = new Section({
  items: '',
  renderer: (data) => {
    cardsList.addItem(createCard('element', data));
      }
    },
  '.elements'
)


// fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me', {
//   method: "GET",
//   headers: {
//     authorization: 'd94f3f5c-42c8-4dc8-aba6-4bc81ee9d748'
//   }
// }).then(res => res.json())
api.getUserInfo()
.then((result) => {
  console.log(result);
  userInfo.setUserInfo(result)

})
.catch((err) => {
  console.log(err); // выведем ошибку в консоль
});

const confirmPopup = new PopupConfirm({
  popupSelector: popupConfirm,
  submit: (target, cardId) =>{
    popupConfirm.querySelector('.popup__submit-button').textContent = 'Удаление...'
    api.deleteCard(cardId)
    .then(()=>{
      target.closest('.element').remove()
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(()=>{
      confirmPopup.close()
      setTimeout(() => {
        popupConfirm.querySelector('.popup__submit-button').textContent = 'Да'
      }, 1000);


    })
  }
})
confirmPopup.setEventListeners()
function handleDeleteCard(target, cardId){
  confirmPopup.open(target, cardId)
}



function handleLikeAdd(cardId, cardElement){
  api.addLike(cardId)
  .then((res)=>{
    console.log(cardElement)
    cardElement.querySelector('.element__like-coutner').textContent = res.likes.length;
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}

function handleLikeRemove(cardId, cardElement){
  api.removeLike(cardId)
  .then((res)=>{
    console.log(cardElement)
    cardElement.querySelector('.element__like-coutner').textContent = res.likes.length;
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}

function createCard(template, data){
  const card = new Card(template, handleCardClick, handleDeleteCard, handleLikeAdd, handleLikeRemove, data);
  const cardElement = card.generateCard();
  return cardElement
}

const imagePopup = new PopupWithImage(popupImage)
imagePopup.setEventListeners()

const addCardPopup = new PopupWithForm({
  popupSelector: popupAddCard,
  submit: ({title, photo}) =>{
    popupAddCard.querySelector('.popup__submit-button').textContent = 'Сохранение...'
    api.addCard(title, photo)
    .then((res)=>{
      cardsList.prependItem(createCard('element', res))
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(()=>{
      addCardPopup.close()
      setTimeout(() => {
        popupAddCard.querySelector('.popup__submit-button').textContent = 'Создать'
      }, 1000);


    })

  }
})
addCardPopup.setEventListeners()

const editPorofilePopup = new PopupWithForm({
  popupSelector: popupProfile,
  submit: (values) =>{
    popupProfile.querySelector('.popup__submit-button').textContent = 'Сохранение...'
      api.setUserInfo(values)
      .then((res)=>{
        userInfo.setUserInfo(res)
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(()=>{
        editPorofilePopup.close()
        setTimeout(() => {
          popupProfile.querySelector('.popup__submit-button').textContent = 'Сохранить'
        }, 1000);


      })
  }
})
editPorofilePopup.setEventListeners()

function handleCardClick (evt){
    imagePopup.open(evt.target)
}

const editAvatarPopup = new PopupWithForm({
  popupSelector: popupEditAvatar,
  submit: (values) =>{
    popupEditAvatar.querySelector('.popup__submit-button').textContent = 'Сохранение...'
    api.changeAvatar(values.avatar)
    .then(res => userInfo.setUserInfo(res))
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
   })
   .finally(()=>{
    editAvatarPopup.close()

    setTimeout(() => {
      popupEditAvatar.querySelector('.popup__submit-button').textContent = 'Сохранить'
    }, 1000);
   })

  }
})
editAvatarPopup.setEventListeners()

profileAvatarButton.addEventListener(('click'), function () {
  editAvatarPopup.open()
})


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

formList.forEach((formElement) => {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });

  const formValidate = new FormValidator(configValidation, formElement);
  formValidate.enableValidation();
});


