
export default class Card {
  constructor(cardData, template, functionCallback) {
    this._title = cardData.name;
    this._link = cardData.link;
    this._template = template;
    this._handleImageClick = functionCallback;
  }

  _getCardTemplate() {

    const cardTemplate = document
  .querySelector(this._template)
  .content.querySelector(".card").cloneNode(true);

  return cardTemplate;

  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("card__like-button_is-active");
  };


  _handleDeleteButton() {
    this._element.remove();
    this._element = null;

  };

  _setEventListeners() {

    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });

    this._imageElement.addEventListener("click", () => {
      this._handleImageClick(this._title, this._link);
    })

    

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

    this._setEventListeners();


    return this._element;
  }

}


