// 클로저 개념
// const x = 1;

// function outerFunc() {
//   const x = 10;
//   function innerFunc() {
//     console.log(x); // 10
//   }

//   innerFunc();
// }

// outerFunc();

// const x = 1;

// // innerFunc()에서는 outerFunc()의 x에 접근할 수 없죠.
// // Lexical Scope를 따르는 프로그래밍 언어이기 때문
// function outerFunc() {
//   const x = 10;
//   innerFunc(); // 1
// }

// function innerFunc() {
//   // innerFunc() 안에 x가 없으니까 외부 전역에서 x를 찾음
//   console.log(x); // 1
// }

// outerFunc();

const x = 1;

// 1
// function outer() {
//   const x = 10;
//   const inner = function () {
//     console.log(x);
//   };
//   return inner;
// }

// const innerFunc = outer();
// innerFunc();

// 클로저 X
// function foo() {
//   const x = 1;
//   const y = 2;

//   // 일반적으로 클로저라고 하지 않아요.
//   function bar() {
//     const z = 3;

//     //상위 스코프의 식별자를 참조하지 않기 때문이죠.
//     console.log(z);
//   }

//   return bar;
// }

// const bar = foo();
// bar();

// 클로저 O
function foo() {
  const x = 1;
  const y = 2;

  // 클로저의 예
  // 중첩 함수 bar는 외부 함수보다 더 오래 유지되며
  // 상위 스코프의 식별자를 참조한다.
  function bar() {
    debugger;
    console.log(x);
  }
  return bar;
}

const bar = foo();
bar();
