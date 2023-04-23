let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")

// element.addEventListener(event, function, useCapture);


div1.addEventListener('click',eventfun =>{
    console.log("div1");
    
    
},{capture:true})

div2.addEventListener('click',printhi)
setTimeout(() => {
    div2.removeEventListener('click',printhi)
},1000)
div3.addEventListener('click',eventfun =>{
    console.log("div3");
    
},{once:true})


function printhi(){
    console.log(hi)
}