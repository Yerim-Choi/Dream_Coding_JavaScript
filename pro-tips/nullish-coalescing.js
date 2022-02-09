// Nullish coalescing operator

// ❌ Bad Code 💩
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
        message = "Nothing to display 😜";
    }
    console.log(message);
}

// ✅ Good Code ✨
function printMessage(text) {
    let message = text ?? "Nothing to display 😜";
    console.log(message);
}

// 🚨 Default parmeter is only for undefined
function printMessage(text = "Nothing to display 😜") {
    console.log(message);
}

// 🚨 Logical OR operator ||
function printMessage(text) {
    const message = text || 'Nothing to display 😜';
    console.log(message);
}

const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
    return null;
}
function fetchFromServer() {
    return 'Hiya from 💻';
}


printMessage('Hello');
printMessage(null);
printMessage(undefined);
printMessage(0);
printMessage('');


// Nullish coalescing operator
// leftExpr ?? rightExpr
// leftExpr 값이 null, undefined 일 경우 만 rightExpr 실행

// Logical OR operator
// leftExpr || rightExpr
// leftExpr 값이 falsy 일 경우 만 rightExpr 실행
// falsy : false , 0 , -0, undefined, null, NaN, '' 