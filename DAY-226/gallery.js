import createModal from "./modal.js";

createModal();

//global var

const modalableImages = document.querySelectorAll('[data-modal = "true"]');
const modalContainer = document.querySelector(".modal-container");
const modalTrack = document.querySelector(".modal__image-container");
//all gallery shared
let transitionSpeed;
let galleries;
//for each gallery
let modalImage;
let modalIndicators;
let currentIndex;
let lastIndex;
let isMoving = false;
//class
class Modal {
  constructor(m) {
    this.modal = m;
    // console.log( this.modal = m )
    //adding this function when the constructor is called
    this.attachEventListeners();
  }
  openModal() {
    modalableImages.forEach((btn) => (btn.tabIndex = "-1"));
    this.modal.removeAttribute("hidden");
    this.modal.classList.add("active");
  }
  closeModal() {
    modalableImages.forEach((btn) => (btn.tabIndex = "0"));
    this.modal.setAttribute("hidden", "true");
    this.modal.classList.remove("active");
  }
  //costume function
  attachEventListeners() {
    this.modal.addEventListener("click", (e) => {
      e.target === e.currentTarget || e.target.classList.contains("modal_close")
        ? this.closeModal()
        : null;
    });
  }
}

//the oops way

const modal = new Modal(modalContainer);

//function

function attachOpenGalleryEventListeners() {
//here we selected the three images on the browser by use the custom tag
  modalableImages.forEach((btn) => {
    btn.addEventListener("click", () => {
      updateGallery(gallery);
      console.log(galleries.find((g) => g.name ===btn.dataset.gallery).images)
      modal.openModal();
    });
  });
}


//event to close the gallery from escape key

window.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && modalContainer.classList.contains("active")) {
    modal.closeModal();
  }
});

function updateGallery(gallery){
   console.log(gallery)
}

export default async function initGallery(endpoint, options) {
  await fetch(endpoint)
  .then((response) => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    galleries = data;

    [modalImages, modalIndicators] = addImagesAndIndicatorsToGallery(
      data.map((gallery) => gallery.images[0]));
    transitionSpeed = options?.speed || 250;
    
    attachOpenGalleryEventListeners();
    // attachArrowEventListeners();
    // attachIndicatorEventListeners();
    // attachTransitionEndListener();
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}


