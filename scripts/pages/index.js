// =========================
// IMPORTS
// =========================

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

import {
  initialCards,
  config,
  editProfileFormElement,
  newCardFormElement,
  profileEditBtn,
  newCardBtn,
} from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";





const handleProfileFormSubmit = (inputData) => {
  userInfo.setUserInfo(inputData);

  editProfilePopup.close();
};

const handleFormNewCardSubmit = (inputData) => {
  const card = new Card({name: inputData.name, link: inputData.link,}, "#card-template", handleImageClick);
  const cardElement = card.generateCard();
  section.addItem(cardElement);


  newPlaceFormValidator.resetValidator();
  addCardPopup.close();
};


 export const handleImageClick = (name, link) => {
  popupWithImage.open({
    caption: name,
    src: link,
    alt: name,
  });
};


//INSTÂNCIAS
const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, "#card-template", handleImageClick);
      return card.generateCard();
    },
  },
  ".cards__list",
);

const editProfilePopup = new PopupWithForm(
  "#edit-popup",
  handleProfileFormSubmit,
);
const addCardPopup = new PopupWithForm(
  "#new-card-popup",
  handleFormNewCardSubmit,
);

const popupWithImage = new PopupWithImage("#image-popup");

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const profileFormValidator = new FormValidator(config, editProfileFormElement);
const newPlaceFormValidator = new FormValidator(config, newCardFormElement);





//EVENTOS


profileEditBtn.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();

  editProfileFormElement.elements.name.value = currentUserInfo.name;
  editProfileFormElement.elements.job.value = currentUserInfo.job;

  profileFormValidator.resetValidator();
  editProfilePopup.open();
})


newCardBtn.addEventListener("click", () => {
  newPlaceFormValidator.resetValidator();
  addCardPopup.open();
})


profileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
popupWithImage.setEventListeners();

section.renderItems();






