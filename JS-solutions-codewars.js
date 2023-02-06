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