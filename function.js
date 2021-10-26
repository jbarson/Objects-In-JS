
const student = "Hollie"

const newObj = {}


function greets(student) {
    console.log(student, "says hi")
    return "hello"
}

greets(student)
greets("Hollie")

console.log('what does this return?',greets("Paige"))
newObj.song = "Hello"

console.log(newObj)

greets.song="the lion sleeps tonight"

console.log(greets)


// <----- Arrays ----->

const newArray = [1,2,3,4,5,6]

console.log(`newArray`, newArray.length)

for(let i = 0 ; i< newArray.length; i++){
    console.log(newArray[i])
}

for(const number of newArray){
    console.log(number)
}

newArray.forEach(function(item){console.log(item)})

const studentOne = {
    name: "Umar",
    hat: "Yellow"
}

const studentTwo = {
    name: "Todd",
    hat: null
}

const studentArray = [studentOne, studentTwo]

for (let student of studentArray) {
    console.log(student.name)
}

for (const property in studentOne) {
    console.log(property, studentOne[property])
}

const propertyName = "hat"
studentOne[propertyName]

// Dont do this....
//for (const value of studentOne) {
//   console.log(value)
//}