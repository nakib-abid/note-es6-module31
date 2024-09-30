function sum(a, b, c){
    // console.log(arguments); // এটা special, শুধুমাত্র ফাংশনের মধ্যে পাওয়া যাবে  (array like object) arguments এ for of loop চালানো যাবে কিন্তু push pop map filter করা যাবেনা
    // arguments কে array করতে চাইলে 
    const args = [...arguments]
    // console.log(args)
    const result = a + b + c;
    return result;
}

const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);