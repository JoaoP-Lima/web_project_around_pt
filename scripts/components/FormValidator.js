export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector),
    );
    this._submitButton = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    this._errorClass = 
      this._config.errorClass;
    this._inputErrorClass = this._config.inputErrorClass;

  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.disabled = true;
    } else {
      this._submitButton.disabled = false;
    }
  }

  _checkInputValidity(inputItem) {
    if (!inputItem.validity.valid) {
      this._showInputError(inputItem, inputItem.validationMessage);
    } else {
      this._hideInputError(inputItem);
    }
  }

  _hideInputError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }
  _showInputError(input, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputItem) => {
      inputItem.addEventListener("input", () => {
        this._checkInputValidity(inputItem);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidator() {
    this._inputList.forEach((inputItem) => {
      this._hideInputError(inputItem);

    });
    this._toggleButtonState();
  }
}
