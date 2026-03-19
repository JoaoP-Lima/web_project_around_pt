// =========================
// IMPORTS
// =========================

import {
  openModal,
  closeModal,
  handleImageClick,
  fillProfileForm,
} from "./utils.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// ==========================
// SELEÇÕES DE ELEMENTOS
// =========================

const profileEditBtn = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const editProfileFormElement = document.forms.editProfileForm;
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const inputName = editProfileFormElement.querySelector(
  ".popup__input_type_name",
);
const inputDescription = editProfileFormElement.querySelector(
  ".popup__input_type_description",
);

const newCardFormElement = document.forms.newPlaceForm;
const newCardBtn = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const inputTitle = newCardFormElement.querySelector(
  ".popup__input_type_place-name",
);
const inputImage = newCardFormElement.querySelector(
  ".popup__input_type_place-link",
);
const cardsContainer = document.querySelector(".cards__list");

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

  openModal(editPopup);

  profileFormValidator.resetValidator();
};


const handleFormProfileSubmit = (evt) => {
  evt.preventDefault();

  profileTitle.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  closeModal(editPopup);

}

const handleFormNewCardSubmit = (evt) => {
  evt.preventDefault();
  renderCard({
    name: inputTitle.value,
    link: inputImage.value,
  });

  newCardFormElement.reset();
  newPlaceFormValidator.resetValidator();
  closeModal(newCardPopup);
  
};

// ===================================================
// EVENTOS
// ===================================================

profileEditBtn.addEventListener("click", handleOpenEditModal);
newCardBtn.addEventListener("click", () => {
  openModal(newCardPopup);
});

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

const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__input-error_active",
  inputErrorClass: "popup__input_type_error",
};

initialCards.forEach((cardItem) => {
  const card = new Card(cardItem, "#card-template", handleImageClick);
  const cardElement = card.generateCard();

  cardsContainer.append(cardElement);
});

// Função para renderizar um cartão na página
const renderCard = (cardData) => {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
};

const profileFormValidator = new FormValidator(config, editProfileFormElement);
const newPlaceFormValidator = new FormValidator(config, newCardFormElement);
profileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

editProfileFormElement.addEventListener("submit", handleFormProfileSubmit);
newCardFormElement.addEventListener("submit", handleFormNewCardSubmit);