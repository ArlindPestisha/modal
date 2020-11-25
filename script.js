'use strict';
// Selecting all the elements that we need to use
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// This function is to open the modal when we pass  to the btnsOpenModal eventlistner
const openModal = function () {
  //console.log('Btn is Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// This is a function that we use below to close the modal and
// also when we click outside of the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Using for loop for the btnModals
for (let i = 0; i < btnsOpenModal.length; i++)
  //With this open the modal when we click the buttons
  btnsOpenModal[i].addEventListener('click', openModal);

// With this we close the modal
btnCloseModal.addEventListener('click', closeModal);
// With this we close the modal when we click outside of the modal
overlay.addEventListener('click', closeModal);

// Creating the esc keyEvent
document.addEventListener('keydown', function (e) {
  //console.log('hey pressed');
  // console.log(e.key);

  // If the pressed key is ESCAPE and the modal does  not the class #hidden clos the modal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
