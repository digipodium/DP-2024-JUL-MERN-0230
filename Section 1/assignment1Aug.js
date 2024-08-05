// 1. WAP to check if a number is perfect square.

const num = 36;

console.log( 5 ** 3 );

const sqrt = num**0.5;
console.log(parseInt(sqrt));
console.log( typeof sqrt  );

if(sqrt == parseInt(sqrt) ){
    console.log("Perfect Square");
}else{
    console.log("Not a Perfect Square");
}

console.log( Number.isInteger(sqrt) );

// 2. WAP to check if a number is palindrome.