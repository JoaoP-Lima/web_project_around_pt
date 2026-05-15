// =========================
// IMPORTS
// =========================
debugger;
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";

import {
  config,
  editProfileFormElement,
  newCardFormElement,
  profileEditBtn,
  newCardBtn,
  profileAvatar,
  profileEditIcon,
  updateAvatarForm,
} from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const handleUpdateAvatarFormSubmit = (inputData) => {
  updateAvatarPopup.renderLoading(true);
  api
    .updateAvatar(inputData.avatar)
    .then((avatarData) => {
      userInfo._avatar.src = avatarData.avatar;
      updateAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      updateAvatarPopup.renderLoading(false);
    });
};

const handleProfileFormSubmit = (inputData) => {
  api
    .updateUserInfo(inputData)
    .then((currentData) => {
      userInfo.setUserInfo(currentData);
    })
    .catch((err) => {
      console.log(err);
    });

  editProfilePopup.close();
};

const handleFormNewCardSubmit = (inputData) => {
  api
    .addCard(inputData)
    .then((cardData) => {
      const card = new Card(
        { name: cardData.name, link: cardData.link },
        "#card-template",
        handleImageClick,
        handleLikeClick,
        handleDeleteClick,
      );
      const cardElement = card.generateCard();
      section.addItemStart(cardElement);

      newPlaceFormValidator.resetValidator();
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleImageClick = (name, link) => {
  popupWithImage.open({
    caption: name,
    src: link,
    alt: name,
  });
};

const handleDeleteClick = (cardInstance) => {
  confirmationPopup.setSubmitAction(() => {
    api
      .deleteCard(cardInstance.getId())
      .then(() => {
        cardInstance.removeCard();
        confirmationPopup.close();
      })
      .catch((err) => console.log(err));
  });
  confirmationPopup.open();
};
const handleLikeClick = (cardInstance) => {
  if (!cardInstance.isLiked()) {
    api
      .likeCard(cardInstance.getId())
      .then((updatedCardLike) => {
        cardInstance.setIsLiked(updatedCardLike.isLiked);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .unlikeCard(cardInstance.getId())
      .then((updatedCardLike) => {
        cardInstance.setIsLiked(updatedCardLike.isLiked);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

//INSTÂNCIAS

export const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "8f725660-649c-4e51-b6a4-a46a9bcae675",
    "Content-Type": "application/json",
  },
});

const section = new Section(
  {
    items: [],
    renderer: (cardData) => {
      const card = new Card(
        cardData,
        "#card-template",
        handleImageClick,
        handleLikeClick,
        handleDeleteClick,
      );
      return card.generateCard();
    },
  },
  ".cards__list",
);
section.renderItems();

api
  .getAppInfo()

  .then(([user, cards]) => {

    document.querySelector(".page").style.visibility = "visible"
  })

  .catch((err) => {
    console.log(err);
  });

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

const editProfilePopup = new PopupWithForm(
  "#edit-popup",
  handleProfileFormSubmit,
);
const addCardPopup = new PopupWithForm(
  "#new-card-popup",
  handleFormNewCardSubmit,
);

const updateAvatarPopup = new PopupWithForm(
  "#update-avatar-popup",
  handleUpdateAvatarFormSubmit,
);

const confirmationPopup = new PopupWithConfirmation("#confirmation-popup");
const popupWithImage = new PopupWithImage("#image-popup");

const profileFormValidator = new FormValidator(config, editProfileFormElement);
const newPlaceFormValidator = new FormValidator(config, newCardFormElement);
const updateAvatarFormValidator = new FormValidator(config, updateAvatarForm);

api
  .getInitialCard()
  .then((cards) => {
    cards.forEach((cardData) => {
      const cardElement = section._renderer(cardData);
      section.addItemEnd(cardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });

api
  .getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(err);
  });

//EVENTOS

profileEditBtn.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();

  editProfileFormElement.elements.name.value = currentUserInfo.name;
  editProfileFormElement.elements.about.value = currentUserInfo.about;

  profileFormValidator.resetValidator();
  editProfilePopup.open();
});
profileEditIcon.addEventListener("click", () => {
  updateAvatarPopup.open();
});

newCardBtn.addEventListener("click", () => {
  newPlaceFormValidator.resetValidator();
  addCardPopup.open();
});

profileFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();
updateAvatarFormValidator.enableValidation();
updateAvatarPopup.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
popupWithImage.setEventListeners();
confirmationPopup.setEventListeners();
