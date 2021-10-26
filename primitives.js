// <----- Primitives ----->

//Boolean

const bool = true
console.log(`bool`, bool)
//String

const string = "strings are fun!"
console.log('String', string)

// Number

const onetwo = 12

console.log(`number`, onetwo)

//Null

const nullValue = null

console.log(null)

//undefined

let noVal;
console.log(`undefined`, noVal)

//Bigint

console.log('math is weird', 0.1 + 0.2)

// 2**53 -1
console.log('big number', Number.MAX_SAFE_INTEGER)

const bigInt = 123n
console.log('bigint', bigInt)

//Symbol

const mySymbol = Symbol("symbol")
const mySymbol2 = Symbol("symbol")

console.log('do they match?', mySymbol === mySymbol2)

console.log(mySymbol.toString(), typeof(mySymbol))
//More

const newString = "a new string"
const another = newString
const stillMore = "a new string"

console.log('comparison', newString === stillMore)

// <----- truthy and falsy ----->

// false, "", 0, null, undefined, NaN
// all others are truthy

console.log(typeof 123)