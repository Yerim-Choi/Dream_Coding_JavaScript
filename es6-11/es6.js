/**
 * 객체 초기자
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
    const ellie1 = {
        name: 'Ellie',
        age: '18',
    };

    const name = 'Ellie';
    const age = '18';

    // 💩
    const ellie2 = {
        name: name,
        age: age,
    };

    // ✨
    const ellie3 = {
        name,
        age,
    };

    console.log(ellie1, ellie2, ellie3);
    console.clear();
}

/**
 * 구조 분해 할당
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 */
{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // 💩
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // ✨
    {
        const { name, level } = student;
        console.log(name, level);

        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    // array
    const animals = ['🐶', '😽'];

    // 💩
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // ✨
    {
        const [first, second] = animals;
        console.log(first, second);
    }
    console.clear();
}

/**
 * 전개 구문
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 */
{
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, { key: 'key3' }]; // 복사 후 추가
    obj1.key = 'newKey'; // object 주소의 참조값을 복사하기 때문에 원래의 object를 변형 시 그대로 적용
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);

    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog: '🐕‍🦺' };
    const dog2 = { dog: '🐶' };
    const dog = { ...dog1, ...dog2 }; // 동일한 key를 가지고 있을 경우 뒤에 있는 value가 덮어 씌어짐
    console.log(dog);

}

/**
 * 기본값 매개변수
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
    // 💩
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }

    // ✨
    {
        function printMessage(message = 'default message') {
            console.log(message);
        }
        printMessage('hello');
        printMessage();
    }

}

/**
 * 삼항 조건 연산자
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
    const isCat = true;

    // 💩
    {
        let component;
        if (isCat) {
            component = '🐱';
        } else {
            component = '🐶';
        }
        console.log(component);
    }

    // ✨
    {
        const component = isCat ? '🐱' : '🐶';
        console.log(component);
        console.log(isCat ? '🐱' : '🐶');
    }
}

/**
 * 템플릿 리터럴
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
    const weather = '🌤';
    const temparature = '16°C';

    // 💩
    console.log(
        'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );

    // ✨

    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);

}