const add = function(a,b){
      console.log(a+b);
}

add(1,2);

//arrow function 
const add2 = (a,b) => {
    console.log(a+b);
}

add2(4,7);
const f3 = () => {
    console.log('hello');
}



const add3 = a => {
    console.log(a+1);
}

add3(4);


const f4 = () => {
     return 'hello'
}

console.log(f4());

const f5 = () => 'hey';

console.log(f5());

