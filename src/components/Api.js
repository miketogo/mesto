export default class Api{
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl
    this._headers = {headers}
  }
  getInitialCards(){
    console.log(this._baseUrl)
    return fetch(`${this._baseUrl}/cards`,  this._headers)
    .then(res => {
      if (res.ok) {
        return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
    };

  getUserInfo(){
   return fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me', {
      method: "GET",
      headers: {
        authorization: 'd94f3f5c-42c8-4dc8-aba6-4bc81ee9d748',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  setUserInfo({name, about}){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me', {
      method: 'PATCH',
      headers: {
        authorization: 'd94f3f5c-42c8-4dc8-aba6-4bc81ee9d748',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  addCard(cardTitle, cardPhoto){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/cards', {
      method: 'POST',
      headers: {
        authorization: 'd94f3f5c-42c8-4dc8-aba6-4bc81ee9d748',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: cardTitle,
        link: cardPhoto
      })
  })
  .then(res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
  })

  }

  deleteCard(cardId){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-21/cards/${cardId}`, {
      method: "DELETE",
      headers: {
      authorization: 'd94f3f5c-42c8-4dc8-aba6-4bc81ee9d748',
      'Content-Type': 'application/json'
  }})
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    })
  }

  addLike(cardId){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-21/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
      authorization: 'd94f3f5c-42c8-4dc8-aba6-4bc81ee9d748',
      'Content-Type': 'application/json'
  }})
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
    })

  }

  removeLike(cardId){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-21/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
      authorization: 'd94f3f5c-42c8-4dc8-aba6-4bc81ee9d748',
      'Content-Type': 'application/json'
  }})
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
    })

  }

  changeAvatar(link){
    console.log(link)
    return fetch('https://mesto.nomoreparties.co/v1/cohort-21/users/me/avatar' , {
      method: "PATCH",
      headers: {
      authorization: 'd94f3f5c-42c8-4dc8-aba6-4bc81ee9d748',
      'Content-Type': 'application/json'
  },
      body: JSON.stringify({
        avatar: link
      })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
}
