const TabButtons = document.querySelector(".TabButtons");
const TabContents = document.getElementsByClassName("TabContents")[0];

const Text1 = `Discover the unparalleled style, performance, and comfort of Nike sneakers, crafted with premium
materials and cutting-edge technology that will set you apart from the crowd. Built for those who
demand the best, these sneakers are the perfect combination of fashion and function, making them a
top choice for athletes and style enthusiasts alike.

Our Nike sneakers offer ultimate cushioning with the iconic Air Max and React foam technologies,
ensuring that your feet will remain comfortable and well-supported for all-day wear. The
form-fitting Flyknit upper provides breathable support while giving your feet that sleek,
high-fashion look. Additionally, the innovative Flywire cables distribute weight evenly and lock
down your foot for a secure fit.

From eye-catching designs to striking colorways, these sneakers will make you stand out on the
court, in the gym, or on the streets. With durable construction and impeccable performance, Nike
sneakers provide a solid foundation for any wardrobe.`;

const Text2 = `Get ready to make your mark with our high-performance Nike sneakers, designed to offer exceptional comfort,
unbeatable performance, and uncompromising style. Combining cutting-edge technology with premium materials, these
sneakers are suitable for both demanding athletes and style-conscious individuals.Each pair of Nike sneakers is outfitted with world-class cushioning technology, from the iconic Air Max bubble to
the versatile React foam, promising unparalleled comfort, support, and longevity. The Flyknit upper conforms to your
foot, giving your sneaker a sleek modern look and breathable, lightweight support. Add Flywire cables to the mix,
and you'll experience a secure and adaptable fit – perfect for any activity.`;

const Text3 = `Step into the world of Nike sneakers and experience unparalleled style, performance, and comfort. Designed for those
who demand the very best, our sneakers blend high-quality materials with cutting-edge technology, resulting in
footwear that caters to both athletes and fashion-lovers.Indulge in the ultra-responsive cushioning offered by the iconic Air Max and React foam technologies, ensuring a
comfortable experience for every step you take. The form-fitting Flyknit upper delivers breathable support and a
fashion-forward look, while the advanced Flywire cables distribute weight evenly for a secure and stable fit.Available in a wide range of bold designs and captivating colorways, our Nike sneakers are your ticket to turning
heads, both on and off the court.they're a stylish and dependable addition to any wardrobe.`;


TabButtons.children[0].addEventListener("click", () => {
  //button bg color
  TabButtons.children[0].style.backgroundColor = "#ffea44";
  TabButtons.children[1].style.backgroundColor = "#ffe270";
  TabButtons.children[2].style.backgroundColor = "#ffe270";
  //button i tag color
  TabButtons.children[0].children[0].style.color = "#84BFE1";
  TabButtons.children[1].children[0].style.color = "#dcdcdc";
  TabButtons.children[2].children[0].style.color = "#dcdcdc";
  //content of the div
  TabContents.children[1].src = `./Images/01.jpg`;
  TabContents.children[1].innerText = Text1;
});

TabButtons.children[1].addEventListener("click", () => {
  //button bg color
  TabButtons.children[1].style.backgroundColor = "#ffea44";
  TabButtons.children[0].style.backgroundColor = "#ffe270";
  TabButtons.children[2].style.backgroundColor = "#ffe270";
  //button i tag color
  TabButtons.children[1].children[0].style.color = "#B3E140";
  TabButtons.children[0].children[0].style.color = "#dcdcdc";
  TabButtons.children[2].children[0].style.color = "#dcdcdc";
  //content of the div
  TabContents.children[1].src = `./Images/02.jpg`;
  TabContents.children[0].innerText = Text2;
});

TabButtons.children[2].addEventListener("click", () => {
  //button bg color
  TabButtons.children[2].style.backgroundColor = "#ffea44";
  TabButtons.children[0].style.backgroundColor = "#ffe270";
  TabButtons.children[1].style.backgroundColor = "#ffe270";
  //button i tag color
  TabButtons.children[2].children[0].style.color = "#EDBEEA";
  TabButtons.children[0].children[0].style.color = "#dcdcdc";
  TabButtons.children[1].children[0].style.color = "#dcdcdc";

  //content of the div
  TabContents.children[1].src = `./Images/03.jpg`;
  TabContents.children[0].innerText = Text3;
});
