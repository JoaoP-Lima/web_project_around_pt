// Preenche o formulário "Editar perfil"
export const fillProfileForm = (profile, inputs) => {
  inputs.inputName.value = profile.title;
  inputs.inputDescription.value = profile.description;
};
