const names = ['Sergey', 'Vadim', 'Artem', 'Anton', 'Maxim']
const numbers = [4, 42, 5, 98, 482, 89, 59, 25, 693, 12, 39, 14, 92, 48]
const users = [
    {name: 'Sergey',
    age: 26,
    student: true,},
    {name: 'Vadim',
    age: 27,
    student: false,},
    {name: 'Artem',
    age: 22,
    student: false,},
    {name: 'Anton',
    age: 18,
    student: true,},
    {name: 'Maxim',
    age: 18,
    student: false,},
]
let result = names.every(el => el.length >= 5)
// console.log(result);

let namesObject = names.reduce((acc, el, index) => {
acc[el] = 'hey'
return acc
}, {})
// console.log(namesObject);

const map = <T, U>(arr: T[], cb: (el: T, index?: number, array?: T[]) => T): T[] => {
    return arr.reduce((acc: T[], item: T, index?: number, arr?:T[]) => {
        const res = cb(item, index, arr)
        acc.push(res)
        return acc
    }, []) 
}
// console.log(map(names, () => 'h'));

const filter = <T>(arr: T[], cb: (el: T, index?: number, array?: T[]) => boolean) => {
    return arr.reduce((acc, value) => {
        const res = cb(value)
        if (res) acc.push(value)
        return acc
    }, [])
}

const getAverage = (numbers) => {
    const total = numbers.reduce((acc, el) => {return acc + el})
    const res = total / numbers.length
    return res
}

//console.log(getAverage(numbers));

const getStudentCount = (users) => {
    return users.reduce((acc, el) => {
        el.student && acc++
        return acc
    }, 0)
}
// console.log(getStudentCount(users));

const getStudentArray = () => {
    return users.reduce((acc, el) => {
        !el.student && acc.push(el.name)
        return acc
    }, [])
}
// console.log(getStudentArray(users))

function sumTo(n: number) { 
    return n === 1 ? n : n + n - 1
}

console.log(sumTo(10));

