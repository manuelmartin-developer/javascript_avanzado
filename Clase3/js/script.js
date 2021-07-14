//  EJERCICIOS DESTRUCTURING
//? Ejercicio 1

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let ana = empleados[1];
console.log(ana);
///////////////////////////
let mailLuis = empleados[0].email;
console.log(mailLuis);

//? Ejercicio 2

let a = 5;
let b = 3;
[a, b] = [b, a];
console.log(a);
console.log(b);

//? Ejercicio 3

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

//  EJERCICIOS SPREAD/REST
//? Ejercicio 1

function sumEveryOther(...num) {
    return num.reduce((acc, current) => acc + current)
};

console.log(sumEveryOther(2000, 6, 8, 23, 56));

//? Ejercicio 2
const addOnlynums = (...arr) => {

    return arr.filter((element) => Number.isInteger(element));
};
console.log(addOnlynums(2, "hola", 16, 9, "Tamara", 15, "Manuel"));

//? Ejercicio 3

const countTheArgs = (...arr) => arr.length;
console.log(countTheArgs(2, "perro", 23, 90));

//? Ejercicio 4

const combineTwoArrays = (arr1, arr2) => {
    let both = [...arr1, ...arr2];
    return both;
};
console.log(combineTwoArrays([1, 2, 3], ["a", "b", "c"]));

//? Ejercicio 5

const onlyUniques = (...args) => {

    let result = [];
    for (element of args) {
        if (!result.includes(element)) {
            result.push(element)
        }
    }
    return result;
};

console.log(onlyUniques(1, 5, 2, 2, 3, 3, 3, 5, 7, 9, 8));

//? Ejercicio 6

const combineAllArrays = (...arrs) => {
    return arrs.reduce((acc, current) => [...acc, ...current])
};

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1], ["Tamara", "Manuel"]));

//? Ejercicio 7

const sumAndSquare = (...args) => {

    return args .map((element) => element * element)
                .reduce((acc, current) => acc + current);
};

console.log(sumAndSquare(1, 2, 10, 8));
