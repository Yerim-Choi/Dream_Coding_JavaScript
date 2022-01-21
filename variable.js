// 1. Use strict
"use-strict";

// 2. Variable : 변수 rw(read/write) 값을 쓰고 읽는게 가능
// let (added in ES6)
let globalName = 'global name'

{
    let name = "ellie";
    console.log(name);

    name = "hello";
    console.log(name);
}

// var (don't ever use this!)
// 변수를 선언하기 전에 값을 넣을 수 있음
// var hoising (move declaration from bottom to top)
// 선언를 가장 최상단으로 끌어올림
// has no block scopr
{ age = 4; var age; }
console.log(age)

// 3. Contant, r(read Only)
// use const whenever possible.
// only use let if variavle needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : premitive types, frozen objects ( i.e object.freeze())
// Mutable data types: all objects bt default are mutable in JS
// favor immutable data type always for a few reasons;
// - securiy : 보안상의 이유 해커들이 다른 값을 넣어 변경하는것을 방지
// - thread safety : 값을 동시에 변경하는 것은 위험이 있을 수 있음
// - reduce human mistakes // 추후 유지보수 시 실수를 방지

// 4. Variable types 자바스크립트 데이터 타입
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container  메모리에 
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numberic values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// chrome & Firefox Browser
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 빈 값 정의
let noting = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
//선언은 되었지만 값이 정의되어 있지 않음

// symbol, create unique identifiers for objects
// 고유한 식별자 생성
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// objectm, real-life object, data structure
const ellie = { name: 'ellie', age: 20 }
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language >> TypeScript ( JavaScript + Type )
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));