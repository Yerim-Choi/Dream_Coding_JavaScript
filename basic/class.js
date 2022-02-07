// Basic 4. 클래스 | 클래스 예제와 콜백 함수 최종 정리

class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    increase(runIf5Times) {
        this.counter++;

        console.log(this.counter);
        if (this.counter % 5 === 0) {
            // callback 함수가 존재 한다면 실행
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(number) {
    console.log(`Wow! ${number}`);
}

function alertNum(number) {
    alert(`alert! ${number}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);
// 클래스의 재사용 가능성이 높아짐
// ** 클래스를 하나의 완전체 기능을 하기보다는 원하는 기능을 재조립이 가능하도록 만드는 것이 좋음

const coolCounter = new Counter();
// TypeError: this.callback is not a function

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();