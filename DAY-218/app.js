const product_image = document.getElementById("product-image");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const rightDiv = document.querySelector(".rightDiv");
const subimages1 = document.getElementById("subimages1");
const subimages2 = document.getElementById("subimages2");

color1.addEventListener("click", () => {
  product_image.src =
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/51833e97-f4d6-4063-a0cc-0ab6d6a03ad6/wio-10-road-running-shoes-GBqQMW.png";

  rightDiv.style.transform = "translateX(0)";

  subimages1.src =
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6cdcc106-9cde-4265-bf74-29cc0d826f92/wio-10-road-running-shoes-GBqQMW.png";
  subimages2.src =
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e4594937-fd2c-4179-b6a7-f440ff096a48/wio-10-road-running-shoes-GBqQMW.png";
  color1.addEventListener("mouseleave", () => {
    rightDiv.style.transform = "translateX(-95%)";
  });
});

color2.addEventListener("click", () => {
  rightDiv.style.transform = "translateX(0)";
  product_image.src =
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4fc878d1-17fd-4db2-b336-dd57a2923a76/wio-10-road-running-shoes-GBqQMW.png";
  subimages1.src =
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c2ce97f2-8b5d-4624-bb0c-86df0dcbcd27/wio-10-road-running-shoes-GBqQMW.png";
  subimages2.src =
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f47ac719-bf12-428b-990b-7e7e2f860cdd/wio-10-road-running-shoes-GBqQMW.png";
  color2.addEventListener("mouseleave", () => {
    rightDiv.style.transform = "translateX(-95%)";
  });
});

color3.addEventListener("click", () => {
  product_image.src =
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6552f272-22ee-4172-a56e-1ca48ea8037c/wio-10-road-running-shoes-GBqQMW.png";
  rightDiv.style.transform = "translateX(0)";
  subimages1.src =
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b53e55b1-bc3c-443e-8990-88c3d80e7590/wio-10-road-running-shoes-GBqQMW.png";
  subimages2.src =
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e332d9f9-4b12-4810-a437-fe614d30b1e7/wio-10-road-running-shoes-GBqQMW.png";
  color3.addEventListener("mouseleave", () => {
    rightDiv.style.transform = "translateX(-95%)";
  });
});
