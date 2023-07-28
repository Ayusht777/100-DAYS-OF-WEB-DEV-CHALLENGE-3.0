
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

var a1 = document.querySelector("#a1")
var a2 = document.querySelector("#a2")
var a3 = document.querySelector("#a3")
var a4 = document.querySelector("#a4")


a1.addEventListener("mouseover",()=>{
    a1.children[0].children[0].style.color = "white"
    a1.children[0].style.backgroundColor = "#0A66C2"
    
})
a1.addEventListener("mouseleave",()=>{
    a1.children[0].children[0].style.color = "black"
    a1.children[0].style.backgroundColor = "white"
    
})
a2.addEventListener("mouseover",()=>{
    a2.children[0].children[0].style.color = "white"
    a2.children[0].style.backgroundColor = "#d6249f"
    a2.children[0].style.background = "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
    
})

a2.addEventListener("mouseleave",()=>{
    a2.children[0].children[0].style.color = "black"
    a2.children[0].style.backgroundColor = "white"
    a2.children[0].style.background = ""
    
})

a3.addEventListener("mouseover",()=>{
    a3.children[0].children[0].style.color = "white"
    a3.children[0].style.backgroundColor = "#24A4F2"
    
    
})

a3.addEventListener("mouseleave",()=>{
    a3.children[0].children[0].style.color = "black"
    a3.children[0].style.backgroundColor = "white"
    
    
})
a4.addEventListener("mouseover",()=>{
    a4.children[0].children[0].style.color = "white"
    a4.children[0].style.backgroundColor = "#0088CC"
    
    
})

a4.addEventListener("mouseleave",()=>{
    a4.children[0].children[0].style.color = "black"
    a4.children[0].style.backgroundColor = "white"
    
    
})
