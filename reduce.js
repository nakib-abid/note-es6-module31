// reduce হচ্ছে সবগুলো উপাদান থেকে নিয়ে নিয়ে একটা জিনিস বানাবে
// reduce মিনিমাম দুটা value নেয়, একটা callback function(দুটো parameter লাগবে, একটা previous value আরেকটা current value) আরেকটা initial value.
const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total);