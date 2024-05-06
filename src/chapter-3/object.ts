// let a: object = {
//     b: "x"
// }
let a = {
    b: "X"
}
a.b
// a = {}
// a = {
//     b:"x",
//     c:"y"
// }
let b = {
    c: {
        d: "F"
    }
}
const c: {
    firstName: string,
    lastName: string
} = {
    firstName: "John",
    lastName: "Doe"
}

class Person {
    constructor(public firstName: string, public lastName: string) {
    }
}
let newPerson = new Person("John", "Doe")


let i: number
// let j = i * 3
