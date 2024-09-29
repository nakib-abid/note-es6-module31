// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const players = [75, 65, 67, 72, 55, 59];
const selected = players.filter(p => p > 70);
const selected2 = players.filter(p => p < 70);
const even = players.filter(p => p % 2 === 0)
console.log(even);



// find হচ্ছে filter এর খালাতো ভাই
শর্ত যারা যারা পুরন করে filter তাদেরকে দেয় 
আর find হচ্ছে শর্ত একাধিক জন পুরন করলেও সে প্রথমটা দিবে