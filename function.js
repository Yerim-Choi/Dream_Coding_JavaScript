// Function 
// - fundamental building block in the program, 프로그램을 구성
// - subprogram can be used multiple times, 재사용이 가능한 장점 
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body... return; }
// one function === one thing
// naming: doSometing, command, verb
// e.g. createCardAndPoint -> createCard, createPoint >> 하나의 행동을 하는 함수로 만들기
// function is object in JS **

function ptintHello() {
    console.log('Hello')
}
ptintHello();

// param
function log(message) {
    console.log(message)
}
log('hello !!');
log(1234);

// TypeScript 사용 시
// type을 지정하여 사용
// 함수의 인터페이스만 봐도 전달되는 파라미터와 리턴 값을 확실히 확인하고 사용할 수 있음
// function log(message: string): number {
//     console.log(message)
// }

// 2. Parameters
// premitive parameters: passed by value
// object parameters: paseed by reference

function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name: 'ellie' };
changeName(ellie)
console.log(ellie) // {name: 'coder'}

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // if (from === undefined) {
    //     from = "unknown"
    // }
    console.log(`${message} by ${from}`)
}
showMessage('Hi!')

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }

    // for of 
    for (const arg of args) {
        console.log(arg)
    }

    // forEach
    args.forEach((arg) => console.log(arg))
}

printAll('dream', 'coding', 'ellie')


// 5. Local scopr
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable, 지역 변수
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // error
}

printMessage();

// 6. Retun a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2) // 3


// 7. Early return, early exit
// 필요한 조건에 맞게 빨리 return 할 수 있도록 코드를 작성
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);








// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const impleMultiply = (a, b) => {
    // do someting more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
// 함수 즉시 실행
(function hello() {
    console.log('IIFE');
})();


// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));



































