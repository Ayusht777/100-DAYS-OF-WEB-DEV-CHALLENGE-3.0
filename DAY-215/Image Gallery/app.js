//variables
const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectImage = document.getElementById("selectImage");
const ImageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const SelectIndex = null;


//functions

ImageIndexes.forEach((i) => {
  const image = document.createElement("img");
  image.src = `./Images/0${i}.webp`;
  image.alt = `image number ${i}`;
  image.classList.add("galleryImages");

  image.addEventListener("click", () => {
    //popup stuff
    popup.style.transform = "translateY(0)";
    selectedImage.src = `./Images/0${i}.webp`;
    selectedImage.alt = `image number ${i}`;
  });

  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = "translateY(-100%)";
  popup.src = "";
  popup.alt = "";
});
