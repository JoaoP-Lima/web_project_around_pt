// Função para exibir o mensagem de erro de validação
export const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

// Função para ocultar a mensagem de erro de validação
export const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("popup__input-error_active");
};

//Função para habilitar ou desabilitar o botão de envio com base na validade dos campos

export const toggleButtonState = (inputList, submitButton) => {
  const isValid = inputList.every((input) => {
    return input.validity.valid;
  });
  submitButton.disabled = !isValid;
};

export const enableValidation = (formElement) => {
  const inputs = Array.from(formElement.querySelectorAll(".popup__input"));
  const submitButton = formElement.querySelector(".popup__button");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (!input.validity.valid) {
        showInputError(formElement, input, input.validationMessage);
      } else {
        hideInputError(formElement, input);
      }
      toggleButtonState(inputs, submitButton);
    });
  });
};

// Adiciona event listeners para validação em tempo real nos campos de entrada

// Função manipuladora do envio do formulário "Novo cartão"
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();

  renderCard({
    name: inputTitle.value,
    link: inputImage.value,
  });

  newCardForm.reset();
  closeModal(newCardPopup);
};
