export default class UserInfo{
  constructor({nameSelector, jobSelector, avatarSelector}){
    this.nameSelector = document.querySelector(nameSelector);
    this.jobSelector = document.querySelector(jobSelector);
    this.avatar = document.querySelector(avatarSelector)
  }

  getUserInfo(){
    const userInfo = {}
    userInfo.name = this.nameSelector.textContent
    userInfo.job = this.jobSelector.textContent

    return userInfo
  }

  setUserInfo({name, about, avatar}){
    this.nameSelector.textContent = name;
    this.jobSelector.textContent = about;
    this.avatar.src = avatar
  }
}
