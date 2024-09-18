const myarr = [4,3,6,8,2,9]

// let newres = myarr.map(num=>num*3); 
// console.log(newres.filter(num=>num%2===0));

// find(): Returns the first element that satisfies the provided testing function.

//findIndex(): retuns the index of that element.

let arr = [1, 2, 3, 4];
// let found = arr.find(num => num > 2);
// console.log(found); // Output: 3


// every(): Returns true if all elements satisfy the provided testing function.

// some(): Returns true if at least one element satisfies the provided testing function.

// console.log(myarr.slice(0,4)); //slice() function makes a copy of org array and perform the changes on that copy according to the parameters

// console.log(myarr.splice(0,3));  //splice method directly remove the elements from the org array and return the subarray acc to the parameters
// // ------------------------------ the elements from index 0 to 2 will be removed from the org array
// console.log(myarr);

// flat(): Flattens nested arrays into a single array.

// flatMap(): First maps each element, then flattens the result by one level.

let newarr = myarr.concat(arr)

// let res = [...myarr,...arr]  //it is called spread operator it can add multiple arrays

console.log(newarr);
