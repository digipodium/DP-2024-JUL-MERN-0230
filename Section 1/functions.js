function addNums(a, b) {
    var c = a + b;
    // console.log(c);
    return c;
}

const result = addNums(3, 4);
// console.log(c);

console.log(result);

const getAvg = function (a, b, c) {
    return (a + b + c) / 3;
}

const avg = getAvg(3, 4, 5);
console.log(avg);

const factorial = (n) => {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}

const fact = factorial(5);
console.log(fact);

const sumprod = (a, b) => {
    const sum = a + b;
    const prod = a * b;

    return [sum, prod];
}

const [s, p] = sumprod(3, 6);
console.log(s, p);

const [a, b, c] = [3, 45, 2];
console.log(c);

// Write a function to print fibbonacci series upto 10 terms

const printFibo = () => {
    let [a, b] = [0, 1];
    console.log(a);
    console.log(b);

    for (let i = 0; i < 8; i++) {
        let c = a + b;
        console.log(c);
        // a = b;
        // b = c;
        [a, b] = [b, c];
    }
}

const printFibo2 = (n) => {
    let [a, b] = [0, 1];
    console.log(a);
    console.log(b);

    for (let i = 0; i < n-2; i++) {
        let c = a + b;
        console.log(c);
        // a = b;
        // b = c;
        [a, b] = [b, c];
    }
}

console.log('fibbonacci series');
printFibo2(15);