const recipe_name =document.getElementById('recipe-name');
const cuisine =document.getElementById('cuisine');
const method =document.getElementById('recipe');
const img =document.getElementById('img');
const search =document.getElementById('search');
const s =document.getElementById('s');
const category = document.querySelector(".category")
const list  = document.querySelector(".list")
let keyword = "";
async function recipe(keyword) {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + `${keyword}`
  );
  const data = await res.json();
  recipe_name.innerHTML = data.meals[0].strMeal;
  cuisine.innerHTML =data.meals[0].strArea
  img.src = data.meals[0].strMealThumb
  if(data.meals[0].strCategory === "Vegan" || data.meals[0].strCategory === "Vegetarian" ){
    category.children[0].style.color = "#00933D"
  }
  else{
    category.children[0].style.color = "#932325"
  }
  

 
 
  let count = 1;
  let ingredients = [];
  for(let i in data.meals[0]){
    let ingredient = ""
    let measure = ""
    if(i.startsWith("strIngredient") && data.meals[0][i]){
      ingredient = data.meals[0][i];
      measure = data.meals[0][`strMeasure`+ count ];
      count+=1;
      
      ingredients.push(`${measure} ${ingredient}`)
    }
  }
  list.innerHTML =""
  ingredients.forEach((ele)=>{
    const lx = document.createElement("li")
    list.appendChild(lx)
    lx.innerHTML =ele
  })
  console.log(ingredients)




}


s.addEventListener("click",()=>{
  keyword = search.value
  recipe(keyword)
})