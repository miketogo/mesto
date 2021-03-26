export default class Api{
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl
    this._headers = headers
    this._token
  }
  getInitialCards(){
    console.log(this._baseUrl)
    return fetch(`${this._baseUrl}/cards`,  {
      method: "GET",
      headers: this._headers
    })
    .then(this._checkResponse)
    };

  getUserInfo(){
   return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers
      ,
    })
    .then(this._checkResponse)
  }

  setUserInfo({name, about}){
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(this._checkResponse)
  }

  addCard(cardTitle, cardPhoto){
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardTitle,
        link: cardPhoto
      })
  })
  .then(this._checkResponse)

  }

  deleteCard(cardId){
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    })
  .then(this._checkResponse)
  }

  addLike(cardId){
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers
    })
  .then(this._checkResponse)

  }

  removeLike(cardId){
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    })
  .then(this._checkResponse)

  }

  changeAvatar(link){
    console.log(link)
    return fetch(`${this._baseUrl}/users/me/avatar` , {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
  })
  .then(this._checkResponse)
  }
  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}
}
