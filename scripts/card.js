// Funções manipuladoras do botão curtir e excluir cartão
const handleCardLike = (button) => {
  button.classList.toggle("card__like-button_is-active");
};

const handleCardDelete = (cardElement) => {
  cardElement.remove();
};

// Função para criar um novo cartão
export const getCardElement = (cardData, template, handleImageClick) => {
  const cardElement = template.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  cardLikeBtn.addEventListener("click", () => {
    handleCardLike(cardLikeBtn);
  });
  cardDeleteBtn.addEventListener("click", () => {
    handleCardDelete(cardElement);
  });
  cardImage.addEventListener("click", handleImageClick);

  return cardElement;
};
