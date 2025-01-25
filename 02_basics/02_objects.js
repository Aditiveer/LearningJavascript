//singleton when object is created by constructor
//Object.create

//object literals
const mySym = Symbol("key1")


const user ={
    name: "Aditi",
    age: 20,
    [mySym]: "key1",
    email: "aditi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}
 //console.log(user.email)
 //console.log(user["email"])
 //console.log(typeof(user[mySym]))

 user.email = "aditi@microsoft.com"
 //Object.freeze(user)
 user.email = "aditi@linkedIn.com"
 //console.log(user)

user.greeting = function(){
    console.log("Hello user")
}
user.greetingTwo = function(){
    console.log(`hello user, ${this.name}`)
}
console.log(user.greeting())
console.log(user.greetingTwo())