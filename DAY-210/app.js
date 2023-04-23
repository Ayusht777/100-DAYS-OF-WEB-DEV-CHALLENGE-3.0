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

const li_ele = document.querySelector('.list-items')
console.log(li_ele.innerHTML);
console.log(li_ele.textContent)
console.log(li_ele.innerText)
