let num = 10; 
console.log("num = "+ num ,'\n-------------------');

//Assignment operator
num+=10;
console.log("num = ",num);
num-=10;
console.log("num = ",num);
num*=10;
console.log("num = ",num);
num/=10;
console.log("num = ",num);
num%=10;
console.log("num = ",num);

//Arithmetic Operators 
num = 10; 
console.log("num = "+ num ,'\n-------------------');

num = num + 1 * 2 - 4 / 2 ** 5 % 2;

console.log("num = ",num);

//Comparison Operators
console.log('________________________________________');
let x = 5;
let y = '5';

console.log(x==y); //it check value only
console.log(x===y);//it check type and value


console.log(x!=y); 
console.log(x!==y);

console.log(x>y);
console.log(x<y);


console.log(x>=y);
console.log(x<=y);

//Logical Operators

console.log('________________________________________');

console.log(x == 5 && x=== 5);

console.log(x == 5 || x=== '5');

console.log(!( x==y ));


//Data Types
console.log('________________________________________');

let name = "Den";
console.log(name);
let age = 21;
console.log(age);
let number1 = 478687257597758;
let number2 = -478687257597758;
let number3 = 47.8687257597758;
console.log(number1 + " ",number2 + " ",number3);

let bool1 = true;
let bool2 = false;
let bool3 = 0;
let bool4 = 1;

console.log(bool1 + " ",bool2 + " ",bool3 + " ",bool4);

let un;
un = 4;


let NewNum = BigInt("48456456646687978797989987");

console.log(NewNum);

console.log(typeof(NewNum));


