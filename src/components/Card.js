
import Popup from "./Popup.js";
export default class Card {
  constructor(
    cardData,
    template,
    handleImageClick,
    handleLikeClick,
    handleDeleteClick,
  ) {
    this._title = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._isLiked = cardData.isLiked;
   


    this._template = template;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._template)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardTemplate;
  }

  isLiked() {
    return this._isLiked;
  }

  setIsLiked(isLiked) {
    this._isLiked = isLiked;
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_is-active");
    } else {
      this._likeButton.classList.remove("card__like-button_is-active");
    }
  }

  removeCard() {
    this._element.remove();
    this._element = null;
    
  }

 

  getId() {
    return this._id;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });
    
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    
    });



    this._imageElement.addEventListener("click", () => {
      this._handleImageClick(this._title, this._link);
    });


  }

  generateCard() {
    this._element = this._getCardTemplate();
    this._imageElement = this._element.querySelector(".card__image");
    this._titleElement = this._element.querySelector(".card__title");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._likeButton = this._element.querySelector(".card__like-button");

    this._imageElement.src = this._link;
    this._titleElement.textContent = this._title;
    this._imageElement.alt = this._title;

    this.setIsLiked(this._isLiked);
    this._setEventListeners();

    return this._element;
  }
}
