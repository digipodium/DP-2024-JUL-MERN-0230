const arr = [345, true, 'hello', undefined, console.log];

console.log(arr);
console.log(typeof arr);

console.log(Array.isArray(arr));
console.log(arr.length);

const movies = ['Stree 2', 'Housefull', 'Deadpool & Wolverine', 'Bad News', 'Baghi', 'Munjya'];

// indexing
console.log( movies[4] );
console.log( movies.at(-1) );
console.log( movies.at(-5) );
console.log( movies.at(1) );

movies[4] = 'Tumbad';
console.log(movies);
console.log(movies.indexOf('Bad News'));

// slicing
console.log(movies.slice(1, -1));
console.log(movies.slice(2));
console.log(movies.slice(2, 50));

// adding and removing elements
movies.push('Creature 3D');  // adds new element at the end
movies.unshift('Dhamaal');      // adds new element at the starting
console.log(movies);

movies.pop();   // removes last element
movies.shift();  // removes first element
console.log(movies);

// movies.splice( 2, 2 ); // removes 2 elements starting from index 2
// movies.splice(2, 2, 'Bhootnath', 'Makdi'); // replacing elements
movies.splice(2, 0, 'Bhoot Uncle', '3 Idiots'); // inserting elements
console.log(movies);

const fruits = ['apple', 'banana', 'mango', 'kiwi', 'orange', 'grapes'];
// replace orange with 'papaya'
// fruits[4] = 'papaya';
// remove last 2 elements
// fruits.splice(-2);

// add 3 fruits before 'apple'
// fruits.splice(0, 0, 'papaya', 'watermelon', 'strawberry');

// remove fruit 'kiwi' from the array
fruits.splice( fruits.indexOf('apple'), 1 );
console.log(fruits);
