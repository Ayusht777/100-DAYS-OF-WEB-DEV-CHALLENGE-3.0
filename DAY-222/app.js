const eye = document.querySelectorAll(".fa-eye-slash");
const pass = document.querySelectorAll("#password-input-field")

const singup = document.querySelector(".input5").lastChild.previousSibling; //don't select this way


const froms  =document.querySelector(".froms");

eye.forEach( eyeiconvar=>{
    eyeiconvar.addEventListener('click',()=>{
       pass.forEach(passvar =>{
        if(passvar.type === 'password'){
            passvar.type = 'text'
            eyeiconvar.className = "fa-regular fa-eye"
        }
        else{
            passvar.type = 'password'
            eyeiconvar.className ="fa-regular fa-eye-slash"
        }
       })
    }
)}

)


singup.addEventListener('click',()=>{
    froms.innerHTML = `<!-- Registration area -->
    <div class="from login f2">
        <div class="input-items">
            <h1>Registration</h1>
            <form action="#">
                <div class="input-area">
                    <input type="text" id="name-input-field" placeholder="Enter Your Name">
                    <i class="fa-regular fa-user"></i>
                </div>
                <div class="input-area">
                    <input type="text" id="email-input-field" placeholder="Enter Your Email">
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div class="input-area"> <input type="password" id="password-input-field"
                        placeholder="Enter Your Password">
                    <i class="fa-solid fa-lock"></i>
                    <i class="fa-regular fa-eye-slash"></i>
                </div>
                <div class="input-area"> <input type="password" id="password-input-field"
                        placeholder="Conform Your Password">
                    <i class="fa-solid fa-lock"></i>
                    
                </div>

                <div class="input-area input3">
                    <div class="checkbox-text"><input type="checkbox" name="" id="checkboxBtn">
                        <label for="checkboxBtn">Remember me</label>
                    </div>
                    <a href="#" class="forogot-Pass">Forgot Password?</a>
                </div>
                <div class="input-area input4">
                    <button class="loginBtn">Login Now</button>
                </div>
            </form>
            <form action="#">
                <div class="input5">
                    <p>Not a member?</p>
                    <a id ="login"href="#">Signup now</a>
                </div>
            </form>
        </div>
    </div>`


    const login = document.querySelector("#login");
    login.addEventListener("click" ,()=>{
        froms.innerHTML = `<div class="from login f1">
        <div class="input-items">
            <h1>Login</h1>
            <form action="#">
                <div class="input-area">
                    <input type="text" id="email-input-field" placeholder="Enter Your Email">
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div class="input-area"> <input type="password" id="password-input-field"
                        placeholder="Enter Your Password">
                    <i class="fa-solid fa-lock"></i>
                    <i class="fa-regular fa-eye-slash"></i>
                </div>

                <div class="input-area input3">
                    <div class="checkbox-text"><input type="checkbox" name="" id="checkboxBtn">
                        <label for="checkboxBtn">Remember me</label>
                    </div>
                    <a href="#" class="forogot-Pass">Forgot Password?</a>
                </div>
                <div class="input-area input4">
                    <button class="loginBtn">Login Now</button>
                </div>
            </form>
            <form action="#">
                <div class="input5">
                    <p>Not a member?</p>
                    <a href="#">Signup now</a>
                </div>
            </form>
        </div>
    </div>
    `
    })
})





