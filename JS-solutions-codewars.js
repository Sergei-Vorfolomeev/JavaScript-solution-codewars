// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    return str.split('').reverse().join('')
}

function solution2(str){
    let newStr = ''
    for (let i=str.length-1; i>=0; i--) {
        newStr += str[i]
    }
    return newStr
}
//-----------------------------------------------------------------------------------------------
// What if we need the length of the words separated by a space
// to be added at the end of that same word and have it returned as an array?
//
//     Example(Input --> Output)
//
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

function addLength(str) {
    const arr = str.split(' ')
    return arr.map(el => el + ' ' + el.length)
}
//-----------------------------------------------------------------------------------------------
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. ' +
// 'For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples

//     mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
//     mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
//     mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
//     mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function mango(quantity, price){
    return Math.ceil(quantity / 3 * 2) * price
}
//-----------------------------------------------------------------------------------------------
// Create a function called _if which takes 3 arguments:
// a value bool and 2 functions (which do not take any parameters): func1 and func2
//
// When bool is truthy, func1 should be called, otherwise call the func2.

function _if(bool, func1, func2) {
    bool ? func1() : func2()
}
//-----------------------------------------------------------------------------------------------
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
//
//     For instance:
//
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumTo(n) {
    if (n === 1) {
        return n
    } else {
        return n + sumTo(n - 1)
    }
}

function sumTo2 (n) {
    let res = 0
    for (let i = 0; i < n; n--) {
        res = res + n
    }
    return res
}
//-----------------------------------------------------------------------------------------------
// The factorial of a natural number is a number multiplied by "number minus one",
//     then by "number minus two", and so on till 1. The factorial of n is denoted as n!

function factorial(n) {
    return n !== 1 ? n * factorial(n-1) : n
}
//-----------------------------------------------------------------------------------------------