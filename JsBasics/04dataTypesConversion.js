let num = 33

let numString = "73"

console.log(typeof(num) , typeof(numString))
let convertedNum = Number(numString)
console.log(typeof(convertedNum) , convertedNum)

//Everything is clear till here pretty obvious thing
//Now 
let alphaNum = "234er"
let alphaConv = Number(alphaNum)    //Conversion will convert to desired type in JS but the value is NaN
console.log(typeof(alphaNum) , typeof(alphaConv) , alphaConv)   //See output NaN(Not a number)

let someNull = null
let someNullCon = Number(someNull)
let stringCon = String(someNull)
console.log(typeof(someNull) , typeof(stringCon) , someNullCon , stringCon)