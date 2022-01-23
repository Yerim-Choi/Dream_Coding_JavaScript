'use strict';
// Object-oriendted programing
// class: template
// object: instance of a class // 클래스에 실제로 데이터를 넣어서 만든 것
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-base inheritance // 기존 프로토타입을 참고

// 1. Class declarations
class Person {
    // constructor
    // 생성자
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

// Object 생성
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // get 값을 return,set 값을 설정 
    get age() { return this._age };
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    };
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields ( public, private )
// Too soon !
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher);
Article.printPublisher();


// 5. Ingeritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`)
    }

    getArea() {
        return this.width * this.height;
    }
}

// class 상속
class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모 메소드 호출
        console.log('🔺');
    }
    // overriding
    getArea() {
        return this.width * this.height / 2;
    }
    toString() {
        return `Triangle: color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color!
console.log(triangle.getArea());


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // [object Object]

let obj = { value: 5 };
function change(value) {
    value.value = 7;
}
change(obj);
console.log(obj);


















