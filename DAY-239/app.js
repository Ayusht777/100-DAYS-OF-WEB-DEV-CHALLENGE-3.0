
const navabar =document.querySelector(".hidden")
const photo =document.querySelector(".photo")
const bio_divinner1 = document.querySelector(".bio-divinner1")
const projects =document.getElementById('projects');
const footer = document.getElementById("footer")

function animation(tim){
    
    return new Promise(resolve => setTimeout(resolve,tim))
}
async function onloadAni(){
   await animation(200)
   navabar.classList.add("show");
   await animation(1100)
   photo.classList.add("showPhoto")
   await animation(1000)
   bio_divinner1.classList.add("showBioDiv")
   await animation(1000)
   projects.classList.add("ShowPrj")
   await animation(100)
   footer.classList.add("showFooter")
}

onloadAni()
var right = document.querySelector(".bio-divinner1")
var cir1 = document.querySelector(".circle1")
var cir2 = document.querySelector(".circle2")

right.addEventListener("mouseenter",(e) =>{
    cir1.classList.add("active1")
    cir2.classList.add("active2")

    console.log(44)

})

right.addEventListener("mouseleave",(e) =>{
    cir1.classList.remove("active1")
    cir2.classList.remove("active2")

    console.log(45)

})



// button

var a1 = document.querySelectorAll(".a1")
var a2 =document.querySelectorAll(".a2")
var a3 =document.querySelectorAll(".a3")
var a4 =document.querySelectorAll(".a4")

a1.forEach((Element) => {
    Element.addEventListener("mouseover",()=>{
        Element.children[0].children[0].style.color = "white"
        Element.children[0].style.backgroundColor = "#0A66C2"
        
    })
});
a1.forEach((Element) => {
    Element.addEventListener("mouseleave",()=>{
        Element.children[0].children[0].style.color = "black"
        Element.children[0].style.backgroundColor = "white"
        
    })
});
a2.forEach((Element) => {
    Element.addEventListener("mouseover",()=>{
        Element.children[0].children[0].style.color = "white"
        Element.children[0].style.backgroundColor = "#d6249f"
    Element.children[0].style.background = "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
        
    })
});
a2.forEach((Element) => {
    Element.addEventListener("mouseleave",()=>{
        Element.children[0].children[0].style.color = "black"
        Element.children[0].style.backgroundColor = "white"
        Element.children[0].style.background = ""
    })
});
a3.forEach((Element) => {
    Element.addEventListener("mouseover",()=>{
        Element.children[0].children[0].style.color = "white"
        Element.children[0].style.backgroundColor = "24A4F2"
        
    })
});
a3.forEach((Element) => {
    Element.addEventListener("mouseleave",()=>{
        Element.children[0].children[0].style.color = "black"
        Element.children[0].style.backgroundColor = "white"
       
    })
});
a4.forEach((Element) => {
    Element.addEventListener("mouseover",()=>{
        Element.children[0].children[0].style.color = "white"
        Element.children[0].style.backgroundColor = "#0088CC"
        
    })
});
a4.forEach((Element) => {
    Element.addEventListener("mouseleave",()=>{
        Element.children[0].children[0].style.color = "black"
        Element.children[0].style.backgroundColor = "white"
       
    })
});




//image hover effect 

var div01 = document.querySelector(".div01")
var div02 = document.querySelector(".div02")
var div03 = document.querySelector(".div03")
var div04 = document.querySelector(".div04")

div01.addEventListener("mouseover",()=>{
  
   div01.children[0].classList.toggle("activeHover")


})
div02.addEventListener("mouseover",()=>{

    div02.children[0].classList.toggle("activeHover")
  

})
div03.addEventListener("mouseover",()=>{

   div03.children[0].classList.toggle("activeHover")
  

})
div04.addEventListener("mouseover",()=>{

   div04.children[0].classList.toggle("activeHover")
  

})
