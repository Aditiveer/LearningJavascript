// #Primitive data type-call by value
    //7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

    const score = 100
    const scoreValue = 100.3
    const isLoggedIn= false
    const outsideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')

    console.log(id === anotherId)
    
    const bigNumber = 374619230487264n
    
    // #Reference(Non Primitive)
   // Array, Objects, Functions

   const sports=["basketball","cricket","volleyball"]
   let myObj = {
    name: "Aditi",
    age: 22,
   }

   const myFunction = function(){
         console.log("Hello world");
   }



   // memory     Stack (Primitive) , Heap(Non-Primitive)
   