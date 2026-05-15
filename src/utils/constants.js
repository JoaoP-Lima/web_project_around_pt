
export const profileEditBtn = document.querySelector(".profile__edit-button");
export const editPopup = document.querySelector("#edit-popup");
export const editProfileFormElement = document.forms.editProfileForm;
export const updateAvatarForm = document.forms.updateAvatarForm;
export const confirmationPopup = document.querySelector("#confirmation-popup");
export const profileAvatar = document.querySelector(".profile__image");
export const profileEditIcon = document.querySelector(".profile__icon");
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



export const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__input-error_active",
  inputErrorClass: "popup__input_type_error",
};
