// EJERCICIOS MAP
/////////////////////////////
const numbers = [4, 5, 6, 7, 8, 9, 10];
console.log(numbers.map(num => Math.pow(num, num)));
///////////////////////////////////
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const coolArray = foodList.map((value, index) => {
    return  index == 0 ? `Como soy de italia, amo comer ${value}` :
            index == 1 ? `Como soy de Japon, amo comer ${value}` :
            index == 2 ? `Como soy de Valencia, amo comer ${value}` :
            `Aunque no como carne, el ${value} es sabroso`;
});

console.log(coolArray);
////////////////////////////////////////////////
const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];

const staffPresentation = staff.map(person => {
    return `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`
});
console.log(staffPresentation);
/////////////////////////////////////////////

// EJERCICIOS FILTER
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers2.filter(num => num % 2 !== 0);

console.log(oddNumbers);
/////////////////////////////////////////////
const foodList2 = [
    {
        name: "Tempeh",
        isVeggie: true,
    },
    {
        name: "Cheesbacon burguer",
        isVeggie: false,
    },
    {
        name: "Tofu burguer",
        isVeggie: true,
    },
    {
        name: "Entrecot",
        isVeggie: false,
    },
];
const veggiesFoods = foodList2.filter(food => food.isVeggie)
    .map(food => {
        return food.name == "Tempeh" ? `Que rico ${food.name} me voy a comer!` :
            `Que rica ${food.name} me voy a comer`;
    });
console.log(veggiesFoods);
////////////////////////////////////////////
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const highPriceProducts = inventory.filter(product => product.price > 300)
    .map(product => product.name);
console.log(highPriceProducts);
/////////////////////////////////////////
// EJERCICIOS REDUCE
const numeros = [39, 2, 4, 25, 62];
const multiplyAll = numeros.reduce((acc, num) => acc * num);

console.log(multiplyAll);
/////////////////////////////////////////
const sentenceElements = [
    "Me",
    "llamo",
    "Manuel",
    "y",
    "quiero",
    "sentir",
    "la",
    "fuerza",
    "con",
    "javascript",
];

const presentation = sentenceElements.reduce((acc, word) => `${acc} ${word}`);

console.log(presentation);
///////////////////////////////////////////
const books = [
    {
        name: " JS for dummies",
        author: "Emily A. Vander Veer",
        price: 20,
        category: "code",
    },
    {
        name: "Don Quijote de la Mancha",
        author: "Cervantes",
        price: 14,
        category: "novel",
    },
    {
        name: "Juego de tronos",
        author: "George R. Martin",
        price: 32,
        category: "Fantasy",
    },
    {
        name: "javascript the good parts",
        author: "Douglas Crockford",
        price: 40,
        category: "code",
    },
];

const codeBooks = books.filter(book => book.category == "code")
    .map(book => book.price)
    .reduce((acc, book) => acc + book)

console.log(codeBooks);



