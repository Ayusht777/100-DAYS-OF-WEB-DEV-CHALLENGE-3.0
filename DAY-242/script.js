const input_field = document.querySelector("#input-field");
const search_btn = document.querySelector("#search-btn");
const search_result = document.querySelector(".search-result");
const show_more_btn = document.querySelector(".show-more-btn");
const heading  =document.querySelector(".heading")
const Search_form = document.getElementById("search-form");
const dark_light = document.querySelector(".dark-light")
const body  =document.querySelector("body")



function loadanime(ms){
    return new Promise(resolve =>{
        setTimeout(resolve,ms)
    })
}
async function animtaion(){
    await loadanime(100)
    heading.classList.add("active")
    await loadanime(1000)
    Search_form.classList.add("activeinput")
}

animtaion()


dark_light.addEventListener("click",()=>{
    body.classList.toggle("changeBg")
    heading.classList.toggle("changeBgText")
    input_field.classList.toggle("changeBgInput")
    search_btn.classList.toggle("changeBgSearchBtn")
    show_more_btn.classList.toggle("changeBgShowMoreBtn")
})

let keyword = "";
let page = 1;


async function showImages() {
  keyword = input_field.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=EDHFvvCySIy1tAtgVZMDMVr1N7c3mBDJkirJQYeU-ZM&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  if(page === 1){
    search_result.innerHTML = ""

  }
  const result = data.results;
 
 
  result.map((result) => {
    const Simages = document.createElement("img");
    Simages.classList.add("Simages");
    Simages.src = result.urls.small;
    const anchor_link = document.createElement("a");
    anchor_link.href = result.links.html;
    anchor_link.target = "_blank"
    anchor_link.appendChild(Simages);
    search_result.appendChild(anchor_link)

  });
  show_more_btn.style.display= "block"
  console.log(data);
}

search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  page=1;
  showImages();

 
});

show_more_btn.addEventListener("click",()=>{
    page++;
    showImages()
})