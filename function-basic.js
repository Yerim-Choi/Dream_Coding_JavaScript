// 1. 함수 선언 & 호출

// 함수 선언
function doSomething(add) {
    console.log("hello");
    console.log(add);
    const result = add(2, 3);
    console.log(result); // 5
}

// 함수 호출
// doSomething();

// 2. 값을 리턴하는 함수
function add(a, b) {
    const sum = a + b;
    return sum;
}

const result = add(1, 2);
// 3. javascript console.log 활용
console.log(result); // 3

// 4. 함수를 인자로 전달
doSomething(add);

// 5. 선언 & 호출 복습
// 어떠한 인자들을 받아와서 어떠한 작업을 할 지 작성
// 호출 할 시 에는 괄호를 통해 인자를 전달

// 6. 함수를 변수에 할당
const addFun = add;
console.log(addFun);
addFun(1, 2); // 3