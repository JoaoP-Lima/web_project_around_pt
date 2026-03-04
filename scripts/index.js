// =========================
// IMPORTS
// =========================

import { fillProfileForm } from "./profile.js";
import { openModal, closeModal, handleEscClose } from "./modal.js";
import { getCardElement } from "./card.js";
import {
  enableValidation,
  toggleButtonState,
  hideInputError,
  showInputError,
} from "./validate.js";

// ==========================
// SELEÇÕES DE ELEMENTOS
// =========================

const profileEditBtn = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const editProfileForm = document.forms.editProfileForm;
const inputName = editProfileForm.querySelector(".popup__input_type_name");
const inputDescription = editProfileForm.querySelector(
  ".popup__input_type_description",
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

const newCardForm = document.forms.newPlaceForm;
const newCardBtn = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");

const inputTitle = newCardForm.querySelector(".popup__input_type_place-name");
const inputImage = newCardForm.querySelector(".popup__input_type_url");

const inputsEdit = editProfileForm.querySelectorAll(".popup__input");
const inputsCard = newCardForm.querySelectorAll(".popup__input");

const cardsContainer = document.querySelector(".cards__list");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  const closeBtn = popup.querySelector(".popup__close");
  closeBtn.addEventListener("click", () => {
    closeModal(popup);
  });

  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closeModal(popup);
    }
  });
});

// ================================================
// FUNÇÕES
// ================================================

const handleOpenEditModal = () => {
  fillProfileForm(
    {
      title: profileTitle.textContent,
      description: profileDescription.textContent,
    },
    {
      inputName: inputName,
      inputDescription: inputDescription,
    },
  );
  inputsEdit.forEach((input) => {
    hideInputError(editProfileForm, input);
  });

  toggleButtonState(
    Array.from(inputsEdit),
    editProfileForm.querySelector(".popup__button"),
  );
  openModal(editPopup);
};

// Função para renderizar um cartão na página
const renderCard = (cardData) => {
  const cardElement = getCardElement(cardData, cardTemplate, () => {
    handleImageClick(cardData);
  });
  cardsContainer.prepend(cardElement);
};

// Função manipuladora de popup de imagem
const handleImageClick = (cardData) => {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;

  openModal(imagePopup);
};

// Função manipuladora do envio do formulário "Editar perfil"

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileTitle.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  let formValid = true;

  inputsEdit.forEach((input) => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
      formValid = false;
    }
  });

  closeModal(editPopup);
};

// Função manipuladora de envio do formulário "Novo Local"

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();

  renderCard({
    name: inputTitle.value,
    link: inputImage.value,
  });

  newCardForm.reset();

  hideInputError(newCardForm, inputTitle);
  hideInputError(newCardForm, inputImage);

  const submitButton = newCardForm.querySelector(".popup__button");
  submitButton.disabled = true;

  closeModal(newCardPopup);
};

// ===================================================
// EVENTOS
// ===================================================

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

profileEditBtn.addEventListener("click", handleOpenEditModal);
newCardBtn.addEventListener("click", () => {
  openModal(newCardPopup);
});

newCardForm.addEventListener("submit", handleCardFormSubmit);

// ===================================================
// INICIALIZAÇÃO
// ===================================================
const initialCards = [
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

initialCards.forEach((card) => {
  renderCard(card);
});

enableValidation(editProfileForm);
enableValidation(newCardForm);
