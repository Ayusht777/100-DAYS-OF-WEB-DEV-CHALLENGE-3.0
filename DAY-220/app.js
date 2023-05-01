const product_details = document.querySelector(".product-details");
const popup = document.querySelector(".popup");
const popupDiv = document.getElementById("popupDiv");

const maxHeight = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight
);

let number = 1;
if (number < 10) {
  let topvalue = 100;
  let index = 1;
  product_details.children[1].addEventListener("click", () => {
    if (number <= 1) {
      product_details.children[0].children[0].innerText = `${number++}`;
      popup.children[0].innerText = `1 Item Is Add To Cart`;
      product_details.children[0].style.display = "block";
      popup.style.transform = "translateY(0)";
      popup.children[1].addEventListener("click", () => {
        popup.remove();
      });
    } else {
      if ((number > 2, number <= 10 && index < 9)) {
        console.log(number);
        const newpopup = document.createElement("div");
        popupDiv.appendChild(newpopup);
        newpopup.classList.add(`popup`, `${number}`);
        newpopup.innerHTML = `<p></p> <i class="fa-solid fa-circle-xmark"></i>`;
        //bag number
        product_details.children[0].children[0].innerText = `${number}`;
        //popup inner text
        newpopup.children[0].innerText = `${number++} Items Is Add To Cart`;
        product_details.children[0].style.display = "block";
        if (topvalue <= maxHeight) {
          popupDiv.children[index].style.top = `${topvalue}px`;
          topvalue = topvalue + 80;
        }

        popupDiv.children[index].style.transform = `translateY(0)`;

        let pv = index;
        popupDiv.children[pv].children[1].addEventListener("click", () => {
          popupDiv.children[pv].remove();
        });
        index = index + 1;

        if (index == 9) {
          const cross = document.createElement("div");
          popupDiv.append(cross);
          cross.classList.add("cross");
          popupDiv.children[index].style.top = `${topvalue - 68}px`;
          cross.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`;
          cross.addEventListener("click", () => {
            popupDiv.remove();
          });
        }
      }
    }
  });
}
