/**
 * 콜백 함수 제어권
 * 1. 호출 시점에 제어권을 갖는다.
 * setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행한다.
 *
 * 2. 인자에 대한 제어권을 갖는다.
 * map
 */

// setInterval
// let count = 0;
// let cbFunc = () => {
//   console.log(count);
//   if (++count > 4) clearInterval(timer);
// };
// let timer = setInterval(cbFunc, 300);

// map
let newArr = [10, 20, 30].map((currentValue, index) => {
  console.log('index: ', index, 'currentValue: ', currentValue);
  return currentValue + 5;
});
console.log(newArr); // 새로운 배열로 출력
