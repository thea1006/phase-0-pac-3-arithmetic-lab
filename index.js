1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a / b
}
number = 5
number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5


function increment(number){
    return (number += 1)
}

function decrement(number){
    return (number -= 1)
}


parseInt("2.2222", 10);

function makeInt(n){
    return parseInt(n, 10)
}

function preserveDecimal(n){
    return parseFloat (n)
}
    

