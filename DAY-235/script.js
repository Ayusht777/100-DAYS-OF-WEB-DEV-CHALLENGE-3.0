const btn = document.querySelector(".btn");

const div = document.querySelector(".conatiner");

const data = fetch("https://jsonplaceholder.typicode.com/users");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");

  data
    .then((response) => {
      //    console.log(response)
      return response.json();
    })
    .then((info) => {
      //this will cacth the return statement
      info.forEach((element) => {
        console.log(element.name);
      });
    });
});
