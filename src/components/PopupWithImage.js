import Popup from "./Popup.js";
import {image , imageTitle} from "../utilis/constants.js"
export default class PopupWithImage extends Popup{

  open(item){
    super.open()
    image.src = item.src
    image.alt = item.alt
    imageTitle.textContent = item.alt
  }
}
