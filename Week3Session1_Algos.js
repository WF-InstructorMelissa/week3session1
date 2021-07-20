// alert("This comes from the JS file.")

//console.log()
console.log("Hello, console logging.")

//Variables : Declaration
var truth = true //var can have mutation problems
let lie = false //let maintains consistent scope
const QUESTION = "Ask" //const doesn't change

    // We'll discuss scope in the next lecture.
    //functions, input, and return as well

//Variables - Types
let num = 5
let string = "just text"
let stringNum = 'single'
let string2 = "doubles"
let string3 = `back ticks`
let no = `"don't"`
let bool = true
let boolean = true
let cats //null
console.log(dogs)  //dogs is undefined

let arr = [0,1,2,3,4,5]
let arr2 = ["dogs", 'cats']
console.log(arr2[0])
let objectDog = {
    "ears": 2,
    "tail": true,
    "legs": 4
}
// console.log(objectDog.tail)

//Crazy math
console.log(2 + 2)

console.log("2" + "2")

console.log(2 + 2 - 2)

console.log("2" + "2" - 2)

console.log("2" + 2)

//Operators - Comparison
console.log("and" == "And")
//Operators - Arithetic
console.log(8%3)
let numThis = 3
numThis = numThis + 1
numThis += 1
numThis++
console.log(numThis)
//Conditional Statements
let Number = 3
Number -= 4

if (Number > 5) {
    console.log("Greater than five")
} 
if(Number % 2 == 0) {
    console.log("Even number")
} else {
    console.log("Odd number")
}

//Loops
let animals = ["cat", "dog", "whale"]

for(let index = 0; index < animals.length; index++ ){
    console.log(animals[index])
}

let indexToStartAt = 2
for(let index = 0; index < animals.length; index++ ){
    console.log(animals[index])
}


let numberOfCarsInGarage = [1,2,3,4]

for(let index = 0; index < nums.length; index++){
    nums[index] = nums[index]*2
}
console.log(nums)


//T-Diagrams

//Concatenation
let a = "This"
let b = "That"

console.log("This" + "That")
console.log( a + b)
console.log( a, b)

let index = 6
console.log("This index is " + 6 + " and six it is.")
console.log(`The "index" is ${index} and 'six' is the index`)


