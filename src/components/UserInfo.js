export default class UserInfo{
  constructor({nameSelector, jobSelector}){
    this.nameSelector = document.querySelector(nameSelector);
    this.jobSelector = document.querySelector(jobSelector);
  }

  getUserInfo(){
    const userInfo = {}
    userInfo.name = this.nameSelector.textContent
    userInfo.job = this.jobSelector.textContent
    console.log(this.nameSelector)
    console.log(userInfo)
    return userInfo
  }

  setUserInfo({name, job}){
    this.nameSelector.textContent = name;
    this.jobSelector.textContent = job;
  }
}
