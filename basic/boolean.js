// Basic 3. 연산자 | boolean의 모든것 && 연산자

// false : 0 , -0, '', null, undefined
// true : -1, 'hello', []

// let num; // undefined > false
let num = 9;
let obj = {
    name: 'ellie'
}

if (num) {
    console.log('true!');
} else {
    console.log('false!');
}

num && console.log(num); // num이 있을 경우 출력
obj && console.log(obj.name); // obj가 있을 경우 출력