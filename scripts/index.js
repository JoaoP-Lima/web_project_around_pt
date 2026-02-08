

const profileEditBtn = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");

const editProfileForm = editPopup.querySelector("#edit-profile-form");
const inputName = editProfileForm.querySelector(".popup__input_type_name");
const inputDescription = editProfileForm.querySelector(
  ".popup__input_type_description",
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");




const newCardForm = document.querySelector("#new-card-form");
const newCardFormBtn = newCardForm.querySelector(".popup__button");
const newCardBtn = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");

const inputTitle = newCardForm.querySelector(".popup__input_type_card-name");
const inputImage = newCardForm.querySelector(".popup__input_type_url");


const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");


  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    const closeBtn = popup.querySelector(".popup__close");
    closeBtn.addEventListener("click", () => {
      closeModal(popup)
    });
  });


const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
};

profileEditBtn.addEventListener("click", () => {
  handleOpenEditModal();
});

newCardBtn.addEventListener("click", () => {
  openModal(newCardPopup);
})





const handleOpenEditModal = () => {
  fillProfileForm();
  openModal(editPopup);
};

const fillProfileForm = () => {
  const currentValues = {
    title: profileTitle.textContent,
    description: profileDescription.textContent,
  };

  inputName.value = currentValues.title;
  inputDescription.value = currentValues.description;
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();


    profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;

  closeModal(editPopup);
};
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

const handleCardLike = (evt) => {
  evt.target.classList.toggle("card__like-button_is-active");
};

const handleCardDelete = (evt) => {
  evt.target.closest(".card").remove();
}

const handleImageClick = (evt) => {
  
      const imageSrc = evt.target.src
      const imageAlt = evt.target.alt

     popupImage.src = imageSrc
     popupCaption.textContent = imageAlt

     openModal(imagePopup);
}

const getCardElement = (
  cardName = "Lugar sem nome",
  cardLink = "./images/placeholder.jpg",
) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");

  cardTitle.textContent = cardName;
  cardImage.src = cardLink;
  cardImage.alt = cardName;

 cardLikeBtn.addEventListener("click", handleCardLike);
 cardDeleteBtn.addEventListener("click", handleCardDelete);
 cardImage.addEventListener("click", handleImageClick);


  return cardElement;
};

const cardsContainer = document.querySelector(".cards__list");

const renderCard = (cardData) => {
  const cardElement = getCardElement(cardData.name, cardData.link);
  cardsContainer.prepend(cardElement);
};



const handleCardFormSubmit = (evt) => {
  evt.preventDefault();

  renderCard({
    name: inputTitle.value,
    link: inputImage.value,
  });

  newCardForm.reset();
  closeModal(newCardPopup);


};

newCardForm.addEventListener("submit", handleCardFormSubmit);





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
})