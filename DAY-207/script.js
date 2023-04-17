//function
lp();

function lp(){
    for(let i=0;i<=5;i++){
        console.log(`the number are ${i}`);
    }
}

lp();


// let btn = document.querySelector('#btn');

// btn.addEventListener('click',function(){
//       console.log("hi");

// })


let n = function(){
    console.log('d');
    console.log('da');
    console.log('db');

}

n();


let nextway = n;

nextway();


function add(first,second){
     console.log(`${first} + ${second} = ${first+second}`);
}

add(5,5);
add(5,'5');


function sub(first=0,second=0){
    console.log(`${first} - ${second} = ${first-second}`);
}

sub(5,2);

sub();

function mul(first=0,second=0){
    console.log(`${first} * ${second} = ${first*second}`,arguments);

}

mul(2,3,2);


let pass = function (passw){
    if(passw === '1234'){
        return true;
    }
    return false;
}

console.log(pass(1234));
console.log(pass("1234"));



