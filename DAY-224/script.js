// console.log("hello")

function createModal() {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `
    <div class="modal-container" aria-model="true" role="dialog"  hidden ="true">

    <div class="modal">
    <div class="modal__overlay">

               <div class="modal__btn-container">
                   <button class="modal__btn modal_arrow modal__arrow--left" id="left" aria-label="Previous image">
                               <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 6.75L4.75 12L10.25 17.25" />
                                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12H5" />
                               </svg>
                   </button>
                   <button class="modal__btn modal_close" id="close" aria-label="close gallery">
                               <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
                               </svg>
                   </button>
                   <button class="modal__btn modal_arrow modal__arrow--right" id="right" aria-label=next image"">
                                   <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
                                   </svg>
                   </button>
               </div>

        <div class="modal__indicator-container">
            <button class="modal__indicator"></button>
        </div>

    </div>

       <div class="modal-image-container">
          <img src="https://static.wixstatic.com/media/5af200_a11dcf87c17640dba3f5ad016e49c66f~mv2.png/v1/fill/w_733,h_419,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5af200_a11dcf87c17640dba3f5ad016e49c66f~mv2.png" alt="" class="modal__image" />
          <img src="https://static.wixstatic.com/media/5af200_2c21510425824fefa20cb203c6b227d1~mv2.png" alt="" class="modal__image" />
          <img src="https://static.wixstatic.com/media/5af200_41129499917c4502ac89478cf5816965~mv2.png" alt="" class="modal__image" />
          <img src="https://static.wixstatic.com/media/5af200_3e72677c9f4f493683c9846ec8e3452b~mv2.png" alt="" class="modal__image" />
          <img src="https://static.wixstatic.com/media/ea6ac8_eb4039ab723440dba6da2416aae4107f~mv2.jpg" alt="" class="modal__image" />
          <img src="https://static.wixstatic.com/media/ea6ac8_c747601a6f81467495b1f15bb8e6544f~mv2.jpg" alt="" class="modal__image" />
          <img src="https://static.wixstatic.com/media/ea6ac8_3a05ee3ce7f74190b92a4e1e097cef1f~mv2.jpg" alt="" class="modal__image" />
          <img src="https://static.wixstatic.com/media/ea6ac8_5d99a4d37eaf4b38883f72499560a919~mv2.jpg" alt="" class="modal__image" />
       </div>
       
   </div>
        

    </div>
    
    
    `
  );
}

createModal();
