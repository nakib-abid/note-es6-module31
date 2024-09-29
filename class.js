const products = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'Dell', price: 45000},
    {id: 3, name: 'HP', price: 40000},
    {id: 4, name: 'MAC', price: 165000},
];

// has some properties, method
class Product{
    country = 'bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product('lenovo')
// console.log(lenovo)
// lenovo.speak('computer products')



class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Tapon sir', 'Physics')
console.log(tapan)

const rashid = new Teacher('Rashid Sir', 'English')
console.log(rashid)