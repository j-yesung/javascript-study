// 1. 숫자
// 1-1. 정수

// 화살표 함수

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }

// }

// let i = 3;

// while (i < 100) {
//   // i는 5로 나누었을 때, 나머지 값이 0이 되어야 하고 i는 5보다 크거나 같아야 한다.
//   if (i % 5 === 0 && i >= 5) {
//     console.log(i);
//   }
//   i++;
// }

// function solution(absolutes, signs) {
//   let answer = 0;
//   // 두 배열 길이 같음
//   for (let i = 0; i < absolutes.length; i++) {
//     // 부호에 따라 +-
//     signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
//   }
//   return answer;
// }

// solution(2, 2);
// function solution(s) {
//   let answer = true;
//   let num1 = 0;
//   let num2 = 0;

//   s = s.toUpperCase();

//   for (let i = 0; i < s.length; i++) {
//     // 돌리면서 s 받은 문자열 중에서 p와 y 단어 개수가 일치하면 true 아니면 false
//     // 대소문자 신경X
//     if (s[i] === 'P') num1++;
//     if (s[i] === 'Y') num2++;
//   }

//   if (num1 === num2) {
//     return answer;
//   } else {
//     return answer;
//   }
// }

// solution('ppyy');

// let person = {
//   name: '홍길동',
//   age: 30,
//   gender: '남자',
// };
// let newPerson = Object.assign({}, person, { head: 35 });
// console.log(newPerson);

// 배열 구조분해할당
// let [value1, value2] = [1, 'new'];
// console.log(value1, value2);

// let { name, age } = {
//   name: 'abc',
//   age: 30,
// };
// console.log(name, age);

// 단축 속성명 : property shorthand
const name = 'nbc';
const newAge = '30';

// key - value
const obj = {
  name: name,
  age: newAge,
};

// 전개 구문 - spread operator
// destructuringrhk과 함께 가장 많이 사용되는 ES6 문법 중 하나임
// let arr = [1, 2, 3];

// let newArr = [...arr, 4]; // ...복붙하고 싶은 배열 변수, 추가할 배열 요소(?)
// console.log(arr);
// console.log(newArr);

// 나머지 매개변수
function exampleFunc(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(...args);
  console.log(args); // ... 전개 구문 빼면 배열로 반환됨
}

exampleFunc(1, 2, 3, 4, 5, 6, 7, 8);

// 템플릿 리터럴 (백틱)
let text = '만나서 반가워요.';
console.log(`안녕하세요. ${text}`);
