// console.log("hello")

function createModal(){
    document.querySelector("body").insertAdjacentHTML("beforeend",`
     <div class = "modal-container" aria-model="true" role="dialog"></div>


    
    `)
}

createModal();