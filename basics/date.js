const mydate = new Date();

// console.log(mydate.toLocaleString());//output full date with time
// console.log(mydate.toLocaleDateString());//output full date only

// console.log(mydate.toDateString());//Sat Sep 14 2024
// let year = mydate.getFullYear();
// console.log(year); // Output: 2024

// // Using Date.now()
// let nowMillis = Date.now();
// console.log(nowMillis); // Output: Current time in milliseconds since Unix Epoch

// // Using getTime() on a new Date object
// let date = new Date();
// let dateMillis = date.getTime();
// console.log(dateMillis); // Output: Same as Date.now() if called immediately after

let opt = {year:"2-digit",weekday:"short",day:"2-digit",month:"2-digit"}
console.log(mydate.toLocaleString('en-GB',opt));
