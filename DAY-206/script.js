//arrays
let supers = ['batman','iron man','superman',7881];

console.log(supers);

supers[4] = 999;

console.log(supers);

delete supers[3];

console.log(supers);

// console.log(supers[-1]);

let md = [12,'ayush',0.488,true,[0,1,2]];


console.log(supers.length);

supers.length = 4;


console.log(supers);

console.log(supers.indexOf('batman')); //it returns position

console.log(supers.includes('superman'));


supers.pop();

console.log(supers);
supers.shift();
console.log(supers);

supers.push("flash");
supers.unshift("hulk");


console.log(supers);

let NewSupers = supers.concat(['xmen']);

console.log(NewSupers);

console.log(supers.join(" "));

let ns = "hellboy, death, hella";

let  xsupers = ns.split(', ');
console.log(xsupers);

console.log(xsupers.slice(0,1));

xsupers.splice(1,2,"deadpool");

console.log(xsupers);

xsupers.reverse();

console.log(xsupers);

xsupers.sort();



console.log(xsupers);




supers = ['batman','iron man','superman'];


console.log('___________________________________________');

supers.forEach(
    function(value,indexOptional,arrayName ){
         console.log(value);
    }

);
supers.forEach(
    function(value,indexOptional,arrayName ){
         console.log(indexOptional);
    }

);
supers.forEach(
    function(value,indexOptional,arrayName ){
         console.log(`this array has this element ${value} at index of  ${indexOptional}`);
    }

);
supers.forEach(
    function(value,indexOptional,arrayName ){
         console.log(arrayName);
}



);


function uppercase(value){
    return value.toUpperCase()
}

let NewArray  = supers.map(uppercase);

console.log(NewArray);


NewArray  = supers.map(
    function (value){
        return value.toLowerCase()
});



console.log(NewArray);


let nums =[] ;

for(let i=0;i<=10;i++){
    nums.push(i);
}

console.log(nums);

let doubleNums = nums.map(
    function(value){
        return value * 2;
    }
)

console.log(doubleNums);


for(let i=0;i<=10;i++){
    if(doubleNums[i] <=10){
      doubleNums[i] = doubleNums[i]+1; 
    }
}

console.log(doubleNums);

doubleNums = doubleNums.filter(
    function(v){
        return v%2===0;
    }
)



console.log(doubleNums);


let sum = doubleNums.reduce(
    function (total,value,indexOptional,array){
        return total + value;
    }
);

console.log(sum);

doubleNums = doubleNums.some(
    function (value){
        return value>=10;
    }
)

console.log(doubleNums);


let  dou = supers.find(
    function (value){
        return value==='batman ';
    }
);

console.log(dou);


let v = doubleNums.every;
    

console.log(v);


//sets


const s = new Set();

s.add(1);
s.add(2);
s.add(3);
s.add(4).add(5);
s.delete(4);

console.log(s,s.has(5),s.size);


s.clear();

//weak set

let list = [1,2,3,4];

let weakset = new WeakSet();
weakset.add(list);
console.log(weakset);


//maps

let m = new Map();

m.set('3','ayush').set(3,true).set(-1.45,[457,788]);

console.log(m,m.get(3),m.has(-1.45),m.size);

m.delete('3');



for (let k of m.keys()){
    console.log(k);
}
for (let v of m.values()){
    console.log(v);
}
console.log("----------------------");
for (let [k,v] of m.entries()){
    console.log(k,v);
}



