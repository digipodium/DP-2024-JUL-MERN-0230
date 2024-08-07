const nums = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log('-------for of loop--------');

for (let n of nums) {
    console.log(n);
}

console.log('------- for each function --------');

nums.forEach((a, index) => { console.log(a, index) });

const nums2 = [3, 6, 9, 7, 12, 2, 19];

for (let n of nums2) {
    console.log(n ** 2);
}

nums2.forEach((n) => { console.log(n ** 2); })

nums2.forEach((n) => {
    if (n % 2 == 0) {
        console.log(n);
    }
});

const numsqr = [];
for (let n of nums2) {
    numsqr.push(n ** 2);
}

console.log(numsqr);

const numsqr2 = nums2.map((a) => { return a ** 2 });

console.log(numsqr2);

const prices = [2300, 140, 990, 2730, 220, 12000];

console.log(230 * 0.18 + 230);

const finalPrices = prices.map((p) => { return p * 0.18 + p });

console.log(finalPrices);

const names = ['raju', 'pinki', 'kaliya', 'chintu'];
console.log('abc'.toUpperCase());

const prices2 = ['₹234.88', '₹899.999', '₹789.3', '₹234.56'];
// [234, 900, 789, 235]

console.log(parseInt('₹234.88'.slice(1)));

const intPrices = prices2.map((p) => { return parseInt(p.slice(1)) });
console.log(intPrices);

const evenNums = nums2.filter((n) => { return n % 2 === 0 });
console.log(evenNums);