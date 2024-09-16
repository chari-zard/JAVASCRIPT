//nullish coalescing operator ??

let one;
let two;
one = 2 ?? 5  //this operator returns the first occuring value but if it is null or undefined it will return next value.
two = null ?? 10;
console.log(one);
console.log(two);
