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