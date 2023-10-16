/**
 * [비동기적 코드의 이해]
 * Promise : 처리가 끝나면 알려줘 (약속)
 * new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행
 * 성공 resolve, 실패 reject
 */

new Promise(function (resolve) {
  setTimeout(function () {
    let name = '에스프레소';
    console.log(name);
    resolve(name); // 성공했으면 인자를 넘겨준다 (then에서 받을 수 있음)
  }, 500);
})
  .then(function (prevName) {
    // 이 안에서도 새롭게 Promise를 만든다.
    return new Promise(function (resolve) {
      setTimeout(function () {
        let name = prevName + ', 아메리카노';
        console.log(name);
        resolve(name); // 성공했으면 인자를 넘겨준다 (then에서 받을 수 있음)
      }, 500);
    });
  })
  .then(function (prevName) {
    // 이 안에서도 새롭게 Promise를 만든다.
    return new Promise(function (resolve) {
      setTimeout(function () {
        let name = prevName + ', 카페모카';
        console.log(name);
        resolve(name); // 성공했으면 인자를 넘겨준다 (then에서 받을 수 있음)
      }, 500);
    });
  });
