let str1 = 'string1';
let str2 = "string1";
let str3 = `string1`; //template version

console.log("str1 === str2 -> ",str1===str2,"\nstr2 === str3 -> ",str2===str3,);

//indexing string

console.log(str1[0],str1[2]);

console.log(str1 + "+" + str2 );

let name1 = 'harry';
let name2 = 'henry';

console.log(name1 < name2);
 name1 = 'Harry';
 name2 = 'henry';

 console.log(name1 < name2);


 //Template literals

const st = `this is
a string literals`

console.log(st);

const name ="den";
let age = 15;

const intro =`my name is ${name} 
and i am ${age} older`; 

console.log(intro);

let NewStr = "  _ string _  ";
console.log('the length of NewStr is : ' + NewStr.length);

console.log(NewStr.trim());
console.log(NewStr.trimStart());
console.log(NewStr.trimEnd());

NewStr = "strings";
console.log(NewStr.toUpperCase());
console.log(NewStr.toLowerCase());

console.log(NewStr.indexOf('s'));
console.log(NewStr.lastIndexOf('s'));
console.log(NewStr.slice(0,2));
console.log(NewStr.replace('s','x'));

console.log(NewStr.charAt(1));

console.log(NewStr.includes('x'));

console.log(NewStr.repeat(2));


if(true){
    console.log("hello");
}

const x ='str';

if(x==='str' && x.length == 3){
    console.log('true');
}
else{
    console.log('false');
}

let num = 11;  
if(num%2==0){
    console.log('is even');
}
else if(num <= 10){
    console.log("is under 10");
}
else{
    console.log('nor even nor less than 10');
}

num = 5;
switch(num){
    case 2:
        console.log('is even');
        break;
    case 10:
        console.log("is under 10");
        break;
    default:
        console.log('nor even nor less than 10');
        break;
}

for(let i=0;i<=10 ;i++){
    console.log(i*i);
}

// const arr = ['ayush','harshit','divyanshu'];
// let para = document.querySelector('p');
// let info = "this is names ";

// for(let i = 0 ;i<arr.length;i++){
//      if(i===arr.length-1){
//         info = info + arr[i] ;
//      }
//      else{
//         info = info + arr[i] +',';
//      }
// }

// para.innerText = info ;


let i = 0;
while(i<=10){
    console.log(i);
    i++;
}


i = 0;

const colors =['red','green','yellow','blue'];

while(i <= colors.length ){
    console.log(`${colors[i]}`);
    i++;
}

i=0;
do{
   console.log(i)
   i++;
}while(i<=4);



for(let x in colors){
    console.log(`${colors[x]}`);
}

let obj = {
    name : "ayush",
    age : 21,
    score :477
}

for(let x in obj){
    console.log(`${x}` + ':' + `${obj[x]}`);
    console.log(`${x} : ${obj[x]}`);
}

const  salaries  = {
    paul : 50000,
    Keven : 74880,
    jack : 78974
};


for( let  x in salaries){
    console.log(`${x} earns salary $ ${salaries[x]} per month and the total is ${salaries[x] * 12 } `);
}

for(let x of colors){
    console.log(x);
}

let s ='dadasdsadsadsadasdadasd dadasdasdasd';

for(let x of s){
    console.log(x);
}