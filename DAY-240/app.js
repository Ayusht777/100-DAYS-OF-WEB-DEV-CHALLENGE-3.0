// let arr = ["ayush", "divyanshu", "harshit"];

// for (let i = 0; i < arr.length; i++) {
//   const Prom = new Promise((resolve, reject) => {
//     if (arr[i] == "divyanshu") {
//       resolve(arr[i]);
//     } else {
//       reject(`The name is ${arr[i]}`);
//     }
//   });

//   Prom.then((x) => {
//     console.log(x);
//   })
//     .catch((y) => {
//       console.log(y);
//     })
//     .finally(() => {
//       console.log("just like try catch for aysnc");
//     });
// }

// const axios = require("axios");

// const d = axios.get("https://cat-fact.herokuapp.com");

// d.then((res) => {
//   console.log(res.data);
// });
// console.log("____________________")
// async function apix() {
//   const dx = await axios.get("https://cat-fact.herokuapp.com");
//   console.log(dx)
// }


// apix()




localStorage.setItem('name','sunny')

sessionStorage.setItem("name","rund")

document.cookie = 'name=rvaci; expires='+ new Date(9999,0,1).toISOString()