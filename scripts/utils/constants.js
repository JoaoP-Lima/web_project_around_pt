
export const profileEditBtn = document.querySelector(".profile__edit-button");
export const editPopup = document.querySelector("#edit-popup");
export const editProfileFormElement = document.forms.editProfileForm;
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(".profile__description");
export const inputName = editProfileFormElement.querySelector(
  ".popup__input_type_name",
);
export const inputDescription = editProfileFormElement.querySelector(
  ".popup__input_type_description",
);

export const newCardFormElement = document.forms.newPlaceForm;
export const newCardBtn = document.querySelector(".profile__add-button");
export const newCardPopup = document.querySelector("#new-card-popup");
export const inputTitle = newCardFormElement.querySelector(
  ".popup__input_type_place-name",
);
export const inputImage = newCardFormElement.querySelector(
  ".popup__input_type_place-link",
);
export const cardsContainer = document.querySelector(".cards__list");




export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];


export const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__input-error_active",
  inputErrorClass: "popup__input_type_error",
};
