//callbacks
// function waitforx(){
//     let n = 3000 + new Date().getTime();
//     while(new Date() < n);
// }
// function register(callback) {
//   setTimeout(() => {
//     console.log("register end");
//     callback();
//   }, 2000);
// }
// function sendEmail(cb) {
//   setTimeout(() => {
//     console.log("send email end");
//     cb()
//   }, 2500);
// }
// function login(cb2) {
//   setTimeout(() => {
//     console.log("login end");
//     cb2()
//   }, 800);
// }
// function getUserData() {
//   setTimeout(() => {
//     console.log("got user data");
//   }, 1000);
// }
// function displayUserData() {
//   setTimeout(() => {
//     console.log("displayed user data");
//   }, 1000);
// }
// register(() => {
//   sendEmail(()=>{
//     login(()=>{
//         getUserData();
//         displayUserData();
//     });

//   });
  
// });

// console.log("other work");



function register() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("register end");
            resolve();
          }, 2000);
    }
  )}
  function sendEmail() {
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("send email end");
            resolve()
          }, 2500);
      })
  }
  function login() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("login end");
            resolve()
          }, 2500);
      })
  }
  function getUserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("get user data end");
            resolve()
          }, 2500);
      })
  }
  function displayUserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("display user data end");
            resolve()
          }, 2500);
      })
  }
 
// register().then(sendEmail).then(login).then(getUserData).then(displayUserData).catch((err)=>{
//    console.log("error while reg")
// })

async function x(){
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData()
}
x().then(()=>{
    console.log("this end")
});

  
  console.log("other work");
  