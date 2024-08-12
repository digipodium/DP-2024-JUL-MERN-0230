const user = {
    name: 'Raju',
    email: 'raju@mail.com',
    password: 'raju123'
};

console.log(user);
console.log(user.name);
console.log(user['email']);

user.password = 'abrakadabra';
user.address = 'lucknow';
console.log(user);

const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy M31',
    price: 14999,
    colors: ['black', 'white', 'blue']
};

console.log(smartphone.price);
console.log(smartphone.colors[2]);
// add color on smartphone colors array

smartphone.colors.unshift('green');
console.log(smartphone);
// 1. replace 2nd color with gray
// 2. replace 'white' color with 'gray'
smartphone.colors[1] = 'gray';
const whiteIndex = smartphone.colors.indexOf('white');
smartphone.colors[whiteIndex] = 'gray';
console.log(smartphone);


const nums = [23, 25, 76, 81, 4, 249, 36];

const perfectNums = nums.filter((n) => {
    const sqrt = n ** 0.5;
    return Number.isInteger(sqrt);
});
console.log(perfectNums);

const smartphoneArray = [
    {
        brand: 'Samsung',
        model: 'Galaxy M31',
        price: 14999,
        colors: ['black', 'white', 'blue']
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S23',
        price: 70000,
        colors: ['black', 'oceanblue']
    },
    {
        brand: 'Vivo',
        model: 'S1 Pro',
        price: 20000,
        colors: ['blue', 'gray']
    },
    {
        brand: 'Oppo',
        model: 'Y11',
        price: 24000,
        colors: ['white', 'green']
    },
    {
        brand: 'Apple',
        model: '12 Mini',
        price: 89999,
        colors: ['black', 'white']
    },
    {
        brand: 'Motorola',
        model: 'G32',
        price: 12999,
        colors: ['green', 'blue']
    },
];

console.log(smartphoneArray.length);
console.log(smartphoneArray[3].price);

// add a new color to motorola
console.log(smartphoneArray[4].colors.push('red'));
console.log(smartphoneArray);


const budgetPhones = smartphoneArray.filter((phone) => { return phone.price <= 20000 });
console.log(budgetPhones);

const blackPhones = smartphoneArray.filter((phone) => { return phone.colors.includes('black') });
console.log(blackPhones);

const brands = smartphoneArray.map((phone) => { return phone.brand });
console.log(brands);

const keyword = 'sam';
// const searchResult = smartphoneArray.filter((phone) => {
//     return phone.brand.toLowerCase() === keyword.toLowerCase()
// });

const searchResult = smartphoneArray.filter((phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase())
});

console.log(searchResult);