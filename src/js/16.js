/**
 * 콜백 함수 내부의 this에 다른 값 바인딩하기
 * 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까?
 * 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법
 */

let obj1 = {
  name: 'obj1',
  func: function () {
    let self = this; // <- 이 부분
    return function () {
      console.log(self.name);
    };
  },
};

// let obj2 = {
//   name: 'obj2',
//   func: obj1.func,
// };

// let callback2 = function () {
//   console.log('obj2');
// };

// setTimeout(callback2, 1500);

let obj3 = { name: 'obj3' };
let callback3 = obj1.func.call(obj3);
setTimeout(callback3, 1500);

// bind
let obj4 = {
  name: 'obj1',
  func: function () {
    console.log(this.name);
  },
};

let boundObj1 = obj4.func.bind(obj4);
setTimeout(boundObj1, 1000);
