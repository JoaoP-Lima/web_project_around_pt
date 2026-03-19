  
  export const openModal = (modal) => {
    modal.classList.add("popup_is-opened");
    document.addEventListener("keydown", handleEscClose);
  };

  export const closeModal = (modal) => {
    modal.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEscClose);
  };

  export const handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_is-opened");
      if (openedPopup) {
        closeModal(openedPopup);
      }
    }
  };



  export const fillProfileForm = (profile, inputs) => {
      inputs.inputName.value = profile.title;
      inputs.inputDescription.value = profile.description;
  
    };
  




  export const handleImageClick = (cardData) => {
    const imagePopup = document.querySelector("#image-popup");
  const popupImage = document.querySelector(".popup__image");
  const popupCaption = document.querySelector(".popup__caption");
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupCaption.textContent = cardData.name;

    openModal(imagePopup);
  };
