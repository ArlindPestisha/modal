'use strict';
// Selecting all the elements that we need to use
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal);

// Using for loop for the btnModals
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', function() {
        console.log('Btn is Clicked');
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
});