// Basic 1. 변수 | primitive 타입과 object의 차이점

// function
// 반복되는 로직에 있어서 함수로 생성
const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

function add(num1, num2) { // 함수 선언
    return num1 + num2; // 기능
}

function print(name, age) {
    console.log(`${name} ${age}`);
}

print(8, 33);

// 함수 호출
const sum = add(3, 4);
console.log(sum);

const doSometing = add; // add와 doSometing 똑같은 함수를 가리키고 있음
const result2 = doSometing(2, 3);
console.log(result2);


function surprise(operator) {
    const result = operator(2, 3);
    console.log(result);
}

surprise(add); // 함수를 인자로 전달 가능