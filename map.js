// map --> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const numbers = [4, 5, 2, 8, 10];
// use call back function to doubled
function doubleIt(num){
    return num * 2;
} 
const result = numbers.map(doubleIt)
// console.log(result);


// use shortcut function to doubled
const double2 = n => n*2;
const output = numbers.map(double2)
// console.log(output);
const output2 = numbers.map(n => n * 2);
console.log(output2); // we do this 



// normal way of doubled
const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double)
}
// console.log(doubled);


// forEach কাজ করে map এর মত কিন্তু map এর মত return করেনা