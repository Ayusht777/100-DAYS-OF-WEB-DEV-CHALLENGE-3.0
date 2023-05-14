import myjson from "./data.json"  assert {type:'json'}

let data = [
                {
                    name: "Ayush Talesara",
                    firstName: "Ayush",
                    Surname: "Talesara",
                    age: 21,
                    hobbies: ["Playing Games", "Coding", "Riding Bicycle"],
                    "Favorite Games and Price": { GTA: 4857, "PLANT VS ZOMBIES": 4787 },
                },
                {
                    name: "Divanyshu sahu",
                    firstName: "Divuanshu",
                    Surname: "sahu",
                    age: 21,
                    hobbies: ["Playing Games", "Coding", "Riding Bicycle"],
                    "Favorite Games and Price": { GTA: 4857, "PLANT VS ZOMBIES": 4787 },
                }
           ];
let data2 = `
[
    {
        "name" : "Ayush Talesara",
        "firstName":"Ayush",
        "Surname":"Talesara",
        "age" : 21,
        "hobbies":["Playing Games","Coding","Riding Bicycle"],
        "Favorite Games and Price":{"GTA":4857,"PLANT VS ZOMBIES":4787}
    },
    {
        "name" : "Divanyshu sahu",
        "firstName":"Divuanshu",
        "Surname":"sahu",
        "age" : 21,
        "hobbies":["Playing Games","Coding","Riding Bicycle"],
        "Favorite Games and Price":{"GTA":4857,"PLANT VS ZOMBIES":4787}
    }
    
]
`

//converting string to object
// console.log(data,"\n----------------------------",data2)
console.log(JSON.parse(data2))
console.log(JSON.parse(data2)[0].name)

console.log("____________________________________________________________")
console.log(myjson)