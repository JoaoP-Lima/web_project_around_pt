import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmitElement) {
    super(popupSelector);
    this._handleFormSubmitElement = handleFormSubmitElement;
    this._form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    const inputList = this._form.querySelectorAll(".popup__input");
    const formValues = {};

    inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }



  

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
     const inputValues = this._getInputValues();
      this._handleFormSubmitElement(inputValues);
    });
  }


  close() {
    this._form.reset();
    super.close();
  }
}
