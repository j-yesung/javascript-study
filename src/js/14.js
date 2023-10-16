Array.prototype.map123 = function (callback, thisArg) {
  // console.log('Hello');

  // map 함수에서 return 할 결과 배열
  let mappedArr = [];

  for (let i = 0; i < this.length; i++) {
    let mappedValue = callback.call(thisArg || globalThis, this[i]);
    mappedArr[i] = mappedValue;
    console.log('mappedArr[i]: ', mappedArr[i]);
  }

  return mappedArr;
};

let newArr = [1, 2, 3].map123(function (number) {
  return number * 2;
});

console.log(newArr);
