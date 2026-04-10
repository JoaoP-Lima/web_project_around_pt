import Popup from "./Popup.js";

export default class PopupWithImage  extends Popup {
   constructor(popupSelector) {
    super(popupSelector);
    this._caption = this._popup.querySelector(".popup__caption");
    this._image = this._popup.querySelector(".popup__image");
    
   }

   open(imageData) {
    
      this._caption.textContent = imageData.caption;
      this._image.src = imageData.src;
      this._image.alt = imageData.alt;

        super.open();

   }

}