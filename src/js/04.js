// 일급객체로서의 함수 (2)
const person = {
  name: 'John',
  age: 31,
  isMarried: true,
  // sayHello: function () {
  //   console.log(`Hello, My name is ${this.name}`);
  // },
  // 화살표 함수
  sayHello: () => {
    console.log(`Hello, My name is ${this.name}`); // 화살표 함수는 this를 바인딩 하지 않는다.
  },
};

person.sayHello();
