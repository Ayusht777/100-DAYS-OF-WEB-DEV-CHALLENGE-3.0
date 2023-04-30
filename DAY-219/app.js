const product_details = document.querySelector(".product-details");
const popup = document.querySelector(".popup");
const popupDiv =document.getElementById("popupDiv");

console.log(popupDiv)

let number = 1;
product_details.children[1].addEventListener("click", () => {
  if (number <=1) {
    product_details.children[0].children[0].innerText = number;
    popup.children[0].innerText = `${number++} Items Is Add To Cart`;

    product_details.children[0].style.display = "block";
    popup.style.transform = "translateY(0)";
    popup.children[1].addEventListener('click',()=>{
        popup.style.display = "none";
    })

    
  }
//   const newpopup = document.createElement('div')
//     popupDiv.appendChild(newpopup)
//     newpopup.classList.add('popup')
//     newpopup.innerHTML =`<p></p> <i class="fa-solid fa-circle-xmark"></i>`
//     //bag number
//     product_details.children[0].children[0].innerText = number;
//     //popup inner text
//     popup.children[0].innerText = `${number++} Items Is Add To Cart`;
    
//     product_details.children[0].style.display = "block";
//     popup.style.transform = "translateY(0)";
//     popup.children[1].addEventListener('click',()=>{
//         popup.style.display = "none";
//     })
    
  
});



