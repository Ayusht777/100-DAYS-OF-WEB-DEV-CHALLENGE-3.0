const slider = document.querySelector('.slider')
const firsImg =slider.querySelectorAll('img')[0];
const arrowIcons  =document.querySelectorAll(".wrapper  i");
let firstImgWidth = firsImg.clientWidth + 350;

const showHideIcons= () =>{
    let scrollWidth  =slider.scrollWidth  - slider.clientWidth;
    arrowIcons[0].style.display  = slider.scrollLeft  == 0 ? "none" : "block";
    arrowIcons[1].style.display  = slider.scrollLeft  == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener('click',() =>{
        slider.scrollLeft+=icon.id == "left" ? - firstImgWidth : firstImgWidth;
        showHideIcons(()=>setTimeout(),60);
    });
});

let drag = false 
let prevPagex ,prevscrollLeft;

const dragstart = (e) =>{
    drag = true;
    prevPagex = e.pageX;
    prevscrollLeft = slider.scrollLeft;
   
}

const dragging = (e) =>{
    if(!drag) return;
    e.preventDefault();
    let possdiff = e.pageX - prevPagex;
    slider.classList.add('dragging')

    slider.scrollLeft = prevscrollLeft - possdiff;
}

const dragstop = () => {
    drag = false;
    slider.classList.remove('dragging')
}

slider.addEventListener("mousedown",dragstart)
slider.addEventListener("mousemove",dragging)
slider.addEventListener("mouseup",dragstop)







