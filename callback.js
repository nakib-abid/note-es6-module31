// callback function

function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetingMorning(name){
    console.log('Good morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name)
}


greeting(greetingMorning, 'Tom Hanks')
greeting(greetEvening, 'Tom Brady')
greeting(greetNight, 'Tom Cruise')

