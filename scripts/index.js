const profileBtn = document.querySelector(".profile__add-button");

const profileEditBtn = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const closeBtn = editPopup.querySelector(".popup__close");
const editProfileForm = editPopup.querySelector("#edit-profile-form");
const inputName = editProfileForm.querySelector(".popup__input_type_name");
const inputDescription = editProfileForm.querySelector(".popup__input_type_description")
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");



const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
}

const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
}

profileEditBtn.addEventListener("click", () => {
  handleOpenEditModal();
   
   
});

closeBtn.addEventListener( "click", ()  => {
  closeModal(editPopup);

});


const handleOpenEditModal = () => {

  fillProfileForm();
  openModal(editPopup);


}

const fillProfileForm = () => {

  const currentValues = {
    title: profileTitle.textContent,
    description: profileDescription.textContent
  };

  inputName.value = currentValues.title;
  inputDescription.value = currentValues.description;
  
};

const handleProfileFormSubmit = (evt) => {

  evt.preventDefault();



  const updateProfile = () => {
  
   profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;

  }
  updateProfile();

  closeModal(editPopup);



};


editProfileForm.addEventListener("submit", handleProfileFormSubmit);


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
  console.log(card.name);
  
});

