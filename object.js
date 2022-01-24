// MDN
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object

// Objects
// one of the JavaScript's data types.
// a collection of relarted data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 변수 하나당 하나의 값을 할당이 가능
// const name = "ellie";
// const age = 4;

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// 타입이 동적으로 Runtime 때 진행 되므로, object 추가 삭제 가능
// 추후 유지보수 시 좋지않으므로 지향
ellie.hasJob = true; // 추가
console.log(ellie.hasJob); // true
delete ellie.hasJob; // 삭제
console.log(ellie.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob); // true

function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
    // 동적으로 key의 값을 관리할 때는 Computed properties를 사용
}

printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);

console.log(person4);

// 4. Constructor function
// object를 생성하는 함수는 대문자로 시작
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
// object 에 해당하는 key 가 있는지 체크
console.log("name" in ellie); // true
console.log("random" in ellie); // false

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (const key in ellie) {
    console.log(key);
}

// for (value of inerable)
const array = [1, 2, 3, 4, 5];
for (const value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: ellie, age: "20" };
const user2 = user; // user와 같은 ref 가리키고 있음
user2.name = "coder";
console.log(user); // { name: coder, age: "20" }

// old way
// 수동적으로 빈 object를 생성하고 데이터를 할당
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.log(user3);

// assign
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
// 뒤에 나오는 property 일 경우 동일한 key값이 있으면 덮어씌어짐
console.log(mixed.size); // big