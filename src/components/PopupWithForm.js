import Popup from "./Popup.js";
import {nameInput, jobInput, titleInput, photoInput} from "../utilis/constants.js"

export default class PopupWithForm extends Popup{
  constructor({popupSelector, submit}){
    super(popupSelector);
    this.submit = submit;
    }
    _getInputValues(){
      const data = {
      }
      data.name = nameInput.value;
      data.job = jobInput.value;
      console.log(data)
      return data
    }
    setEventListeners(){
      super.setEventListeners();
      this.submit()

    }
    close(){
      super.close();
      titleInput.value = '';
      photoInput.value = '';
      nameInput.value = '';
      jobInput.value = '';
    }
}
