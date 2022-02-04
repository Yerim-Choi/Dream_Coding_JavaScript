// Basic 1. 변수 | primitive 타입과 object의 차이점

// primitive
// number, string, boolean, null, undefined
// 데이터의 값을 유추할 수 있도록 변수명 작성
// 정의한 변수를 저장할 메모리 공간이 생성되고 데이터를 할당할 시 그 공간에 저장
let number = 2;
let number2 = number; // number2라는 공간에 number의 데이터를 저장

console.log(number); // 3
console.log(number2); // 2

number2 = 3;

console.log(number); // 2
console.log(number2); // 3

// object
// object 안에 각각의 key 마다 메모리 공간 생성
let obj = {
    name: "ellie",
    age: 5,
};

console.log(obj.name); // ellie

// obj의 값이 그대로 복사되어서 저장
let obj2 = obj;
console.log(obj2.name); // ellie

obj.name = "james";
console.log("-----");
console.log(obj.name); // james
console.log(obj2.name); // james

// object는 데이터를 참조에 의해 저장되고 복사