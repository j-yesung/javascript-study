// 17.js -> refactoring
let addCoffee = function (name) {
  return function (prevName) {
    // 이 안에서도 새롭게 Promise를 만든다.
    return new Promise(function (resolve) {
      setTimeout(function () {
        let newName = prevName ? `${prevName}, ${name}` : name;
        console.log(newName);
        resolve(newName); // 성공했으면 인자를 넘겨준다 (then에서 받을 수 있음)
      }, 500);
    });
  };
};

addCoffee('에스프레소')()
  .then(addCoffee('아메리카노'))
  .then(addCoffee('카페모카'))
  .then(addCoffee('카페라떼'));
