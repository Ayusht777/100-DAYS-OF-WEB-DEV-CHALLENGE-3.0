let user1 = {
    name:'king',
    email:'king@mail.com',
    login(){
       console.log(this.email + ' has been login ') 
    },
    logout(){
       console.log(this.email + ' has been logout ') 
    }

}

console.log(user1)
console.log(user1.name)
console.log(user1.login());
console.log(user1.logout());


user1.name = 'yank';
console.log(user1.name)
user1['name'] = 'setve';
console.log(user1.name)

user1.age =  59;

console.log(user1)


user1.salary = (salary) => {
   return (salary * 12) - (salary * 12) / 100 * 8 
}


console.log(user1.salary(458));


class user {
    
    constructor(name='username',email='user@mail.com'){
        this.name = name;
        this.email =email;
    }
    login(){
        console.log(this.email + ' has been login ') 
        return this
    }  
     logout(){
        console.log(this.email + ' has been logout ') 
        return this
     }
}


let user3 = new user('ayush' , 'ayush@mail.com');
let user4 = new user();

console.log(user3);
console.log(user4);


console.log(user4.logout());

user4.logout();

user3.login().logout();


class Admin extends user{
    deleteUser(user){
         ul = ul.filter(u=>{
            return u.email != user.email;
         })
    }
}
admin = new Admin('admin123','admin@mail.com')

let ul = [user3,user4];

console.log(ul);

admin.deleteUser(user3);


console.log(ul);


// prototype

function us1(name,email){
    this.name = name;
    this.email =email;
    this.login = function(){
        console.log(this.email + ' has been login ')
    }

}

let user5 = new us1('james','james@mail.com')

console.log(user5);
console.log(user5.login());

