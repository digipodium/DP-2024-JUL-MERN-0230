for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('-----------------');

for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log('----------while loop----------');
let b = 10;

while (b < 20) {
    console.log(b);
    b++;
}

console.log('----------do-while loop----------');
let c = 10;

do {
    console.log(c);
    c++;
} while (c > 20);

num = 756435;
// 534657
reverse = 0;

while (num > 0) {
    let d = num % 10;
    reverse = reverse * 10 + d;
    num = parseInt(num / 10);
}

console.log(reverse);

// console.log(parseInt(4562/10));

num1 = 17;
let prime = true;

for (let i = 2; i < num1 / 2; i++) {
    if (num1 % i == 0) {
        console.log('not prime');
        prime = false;
        break;
    }
}

if (prime) console.log('prime');

console.log('--------for of loop---------');
const arr = [3, 7, 5, 1, 89, 9, 4];

for(let n of arr){
    console.log(n);
}