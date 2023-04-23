// let main_heading = document.getElementById('main-heading');
// console.log(main_heading)

// let list_items = document.getElementsByClassName("list-items");

// console.log(list_items)
// let ul = document.getElementsByTagName("ul");

// console.log(ul)

// // let container = document.querySelector('div');

// // console.log(container)


// let alldiv = document.querySelectorAll('div');

// console.log(alldiv);



let main_heading =document.querySelector('#main-heading')

console.log(main_heading)

main_heading.style.color = 'white'
main_heading.style.textTransform = 'uppercase';

//don't going to select all li element  due to inline 
let list_items = document.querySelector(".list-items");

// list_items.style.fontSize = '2.5rem';

console.log(list_items)


for(let i = 0;i<list_items.length ;i++){
    
    list_items[i].style.fontSize = '2.5rem';
    
}


const ulist = document.querySelector('ul');
const lilist = document.createElement('li');

ulist.append(lilist);

lilist.innerText ='Tomb Rider'

// const li_ele = document.querySelector('.list-items')
// console.log(li_ele.innerHTML);
// console.log(li_ele.textContent)
// console.log(li_ele.innerText)

// lilist.setAttribute('class','list-items')
// lilist.removeAttribute('class')

lilist.classList.add('list-items')


console.log(lilist.classList.contains('list-items'));

const div2 = document.querySelector('.container')
const innerdiv2 = document.createElement('div');
div2.append(innerdiv2);

console.log(innerdiv2)

innerdiv2.setAttribute('id','innerdiv')

innerdiv2.style.width = '100px';
innerdiv2.style.height = '50px';
innerdiv2.style.backgroundColor = 'black';
innerdiv2.style.borderRadius = '1rem';
innerdiv2.style.marginBottom = '2rem';


const InnerDivText = document.createElement('h1')


innerdiv2.append(InnerDivText)


InnerDivText.innerText = 'click';

InnerDivText.style.fontSize = '1.5rem'
InnerDivText.style.color = 'white';
InnerDivText.style.backgroundColor = 'transparent'



console.log('--------------------------------------------------------------')


let ulists =  document.querySelector('ul');

console.log(ulist.parentNode);

console.log(ulist.parentNode.parentNode);

console.log(ulist.parentElement);

console.log(ulist.parentElement.parentElement);



console.log('-----------------^^^^^^^^^^^^^^^-------------')

let html = document.documentElement
console.log(html)

console.log(html.parentNode)
console.log(html.parentElement)
console.log('--------------------------------------------------------------')



let litag  = document.querySelector('.list-items')


console.log(litag.parentNode);

console.log(litag.parentNode.parentNode);

console.log(litag.parentElement);

console.log(litag.parentElement.parentElement);




console.log('--------------------------------------------------------------')


console.log(ulists.childNodes)
console.log(ulists.firstChild)
console.log(ulists.lastChild)

console.log(ulists.childNodes.childNodes)
console.log(ulists.childElementCount)

console.log(ulists.children)


// ulists.childNodes[1].style.backgroundColor = 'red'




console.log('--------------------------------------------------------------')

 
console.log(ulist.nextSibling)

console.log(ulist.previousSibling)

console.log(ulist.previousElementSibling)

console.log(ulist.nextElementSibling)



const NewDiv =document.createElement('div')

const bdy = document.querySelector('body')


console.log(bdy)

bdy.append(NewDiv)

NewDiv.setAttribute('class','newdiv')

console.log(NewDiv)

NewDiv.style.width= '100%';

NewDiv.style.height= '600px';

NewDiv.style.backgroundColor = 'black'

NewDiv.style.marginTop = '5rem'
NewDiv.style.display = 'flex';
NewDiv.style.flex = 'columns' 
NewDiv.style.justifyContent  = 'space-around'
NewDiv.style.alignItems = 'center'


const  DivIn1 =  document.createElement('div');
DivIn1.setAttribute('class','DivIn')
NewDiv.append(DivIn1)
const  DivIn2 =  document.createElement('div');
DivIn2.setAttribute('class','DivIn')
NewDiv.append(DivIn2)
const  DivIn3 =  document.createElement('div');
DivIn3.setAttribute('class','DivIn')
NewDiv.append(DivIn3)


DivIn1.style.width = '30%'
DivIn1.style.height = '80%'
DivIn1.style.backgroundColor = 'red'
DivIn1.style.display = 'flex'
DivIn1.style.justifyContent = 'center'
DivIn1.style.alignItems = 'center'


DivIn2.style.width = '30%'
DivIn2.style.height = '80%'
DivIn2.style.backgroundColor = 'red'
DivIn2.style.display = 'flex'
DivIn2.style.justifyContent = 'center'
DivIn2.style.alignItems = 'center'

DivIn3.style.width = '30%'
DivIn3.style.height = '80%'
DivIn3.style.backgroundColor = 'red'
DivIn3.style.display = 'flex'
DivIn3.style.justifyContent = 'center'
DivIn3.style.alignItems = 'center'


const btn1 = document.createElement('button')

DivIn1.append(btn1)
const btn2 = document.createElement('button')

DivIn2.append(btn2)

const btn3 = document.createElement('button')

DivIn3.append(btn3)


btn1.style.width = '200px'
btn1.style.height = '50px'
btn1.style.backgroundColor = 'white'

btn2.style.backgroundColor = 'white'
btn2.style.width = '200px'
btn2.style.height = '50px'

btn3.style.backgroundColor = 'white'
btn3.style.width = '200px'
btn3.style.height = '50px'


btn1.addEventListener('click',() => {
    alert("this a btn")
})
btn2.addEventListener('click',() => {
    alert("this a btn")
})
btn3.addEventListener('click',() => {
    alert("this a btn")
})

btn1.addEventListener('mouseover',() => {
    btn1.style.backgroundColor = 'blue'
})
btn1.addEventListener('mouseout',() => {
    btn1.style.backgroundColor = 'white'
})