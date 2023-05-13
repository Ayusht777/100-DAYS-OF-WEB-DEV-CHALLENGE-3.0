function changeBG (element,color){
    element.style.backgroundColor = color;
}


try{
    const box =document.getElementById('box');
    changeBG(box,'gray')
}catch(e){
      console.log(e);
      console.dir(e)
}
finally{
    console.log("no error")
}





// prompt("hi what's up")


//regex

let ReNormalWay = /^matchthis$/i
//i for sensitive case  
let pattern = "^Ayush$"

let  flag  = "i"
let ReConstructorWay = new RegExp(pattern,flag)

console.log(ReNormalWay,ReConstructorWay)

const str = "ayush"

if(ReConstructorWay.test(str)){
    console.log("name is correct")
}



let newp = new RegExp("[{()}] \\ ",'i')



console.log(newp)


let pass = "1234[45]{44}(444)\\"

console.log(newp.test(pass))

console.log(pass.match('\^[]$\i'))


let stxr  = "AYUSH IS AYUSH"

stxr.match(/AYUSH/g)
stxr = stxr.replace(/AYUSH/g,"nord")

console.log(stxr)
let num  = "97874587458"

num.match(/9/g)
num = num.replace(/9/g,"0")

console.log(num)