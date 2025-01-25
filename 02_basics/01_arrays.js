//array
const arr = [0, 1, 2, 3, 4, 5]
//console.log(arr[1])

const colors= ["red" , "orange" , "purple"]
const arr1 = new Array(1, 2, 3, 4, 5, 6)

// Array methods
//arr.push(6)
//arr.push(7)
//arr.pop()

//arr.unshift(9)
//arr.shift()
//console.log(arr.includes(10))
//console.log(arr.indexOf(2))

const newArr = arr.join()
//console.log(arr)
//console.log(newArr)
//console.log(typeof(newArr))


/* slice, splice
console.log("A ", arr)
const a1 = arr.slice(1,3)
console.log(a1)

console.log("B ", arr)
const a2 = arr.splice(1,3)
console.log("C ", arr)
console.log(a2)*/


const marvel_heroes = ["spiderman","thor","Ironman"]
const dc_heroes = ["superman","flash","batman"]
const all_heroes = [...marvel_heroes, ...dc_heroes]//spread operator use to combine two or more arrays into one
//console.log(all_heroes)


const array1 =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another_arr = array1.flat(Infinity)
console.log(another_arr)

console.log(Array.isArray("Aditi"))
console.log(Array.from("Aditi"))
console.log(Array.from({name: "Aditi"})) //interesting

let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1, score2, score3))