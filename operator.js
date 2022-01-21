// 1. String concatenation
// + 
console.log('my' + 'cat') // 문자열 더하기
console.log('1' + 2)
console.log(`string literals: 1 + 2 = ${1 + 2}`)

console.log("ellie's \n\tbook")
// \n 개행
// \t tab 키

// 2. Numeric operators
// number 관련 연산 기호
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // duvude
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
// ++, -- operators
let counter = 2;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter
console.log(preIncrement) // 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1
console.log(counter) // 4

// 4. Assignment operators
let x = 3;
let y = 6;
x += y // x = x + y
x -= y
x *= y
x /= y

// 5. Comparison operators
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // greater than
console.log(10 >= 6) // greater than or equal

// **
// 6. Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`)
// 함수나 시간이 소요되는 판단은 맨 하단에 위치

// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`)

// often used to compress long if-statement
// nullableObject && nullableObject.something
// null 이 아닐 때 만, 실행
// if (nullableObject !== null) {
//     nullableObject.something
// }


function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😱');

    }
    return true;
}

// ! (not)
// 값을 반대로 바꿔줌
console.log(!value1) // true



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// ** type check
// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // true
// 각각 다른 reference 저장되고 있으므로 같은 값이 아님

console.log(ellie1 === ellie3); // true


// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const nickname = 'df';
if (nickname === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (nickname === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator : ?
// condition ? value1 : value2
// 간단한 코드를 작성할 때 가독성이 좋음
console.log(nickname === 'ellie' ? 'yes' : 'no')

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        // case를 연달아서 쓰면 코드의 반복을 피할 수 있음
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 조건에 상관없이 무조건 블록을 먼저 실행
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}