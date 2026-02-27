document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector(".modal");
  const buttonOpen = document.querySelector('.search__button');
  const buttonClose = document.querySelector('.modal__close');

  if (!modal) {
    return;
  }

  const openModal = () => {
    modal.style.display = "block";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  buttonOpen.addEventListener('click', openModal);
  buttonClose.addEventListener('click', closeModal);

})
