// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple', 'banana']);
console.log(json)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'), // 제외
    jump: () => { // 제외
        console.log(`${name} can jump`)
    },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON  to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value; // 데이터 타입 변환
})
console.log(obj);
rabbit.jump();
// obj.jump(); // error 발생

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //error 발생
console.log(obj.birthDate);



// MDN ➡️ https://developer.mozilla.org/en-US/d...
// JavaScript.info ➡️ https://javascript.info/json
// JavaScript.info 한국어 ➡️ https://ko.javascript.info/json

// 유용한 사이트
// JSON Diff checker: http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/json-validator/