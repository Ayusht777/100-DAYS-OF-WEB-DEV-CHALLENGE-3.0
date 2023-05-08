import createModal from "./app.js";

createModal()

//global var

const modalableImages =document.querySelectorAll('[data-modal = "true"]')
//class
class Modal{
   constructor (m){
    this.modal = m ;
    // console.log( this.modal = m )
    //adding this function when the constructor is called
    this.attachEventListeners()
   }
   openModal(){
    modalableImages.forEach((btn) => (btn.tabIndex = '-1'))
    this.modal.removeAttribute("hidden")
    this.modal.classList.add('active')
   }
   closeModal(){
    modalableImages.forEach((btn) => (btn.tabIndex = '0'))
    this.modal.setAttribute("hidden","true")
    this.modal.classList.remove('active')
   }
   //costume function
   attachEventListeners(){
       this.modal.addEventListener('click',(e)=>{
        e.target === e.currentTarget || e.target.classList.contains('modal_close') ? this.closeModal() : null
         
       })
   }
}
//the oops way
const modalContainer = document.querySelector('.modal-container');
const modal = new Modal(modalContainer);


//function 

function openImageGalleryEventListeners(){
  //here we selected the three images on the browser by use the custom tag 
   modalableImages.forEach((btn) => 
        {
         btn.addEventListener('click',()=>{
          modal.openModal()
         }
        
         )
   })
}
openImageGalleryEventListeners()

//event to close the gallery from escape key

window.addEventListener('keyup',(e)=>{
  if(e.key == 'Escape' && modalContainer.classList.contains("active")){
    modal.closeModal()
  }
})