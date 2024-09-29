// data access

const data = [{id: 1, name: 'abul', address: 'dhaka'}];
// address
// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'Lenovo', price: 65000},
        {id: 2, name: 'Macbook', price: 165000},
    ]
}
// second product price
console.log(products.data[1].price);

// optional chaining -->  ?.  যদি মান পাওয়া যায় তাহলে সামনে আগাবে নাহলে এখানেই থেমে যাবে