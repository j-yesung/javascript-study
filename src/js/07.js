// Map
// JS -> 객체, 배열 : 많고 다양하고 복잡한 프로그램을 만들어 옴
// 그럼에도 현실세계에서 반영하기는 좀 많이 어려웠다.
// Map, Set 추가적인 자료구조가 등장
// Map, Set 목적 : 데이터의 구성, 검색 사용을 효율적으로 처리 -> 기존의 객체 또는 배열보다

// (1) Map
// Key - Value
// key에 어떤 데이터 타입(유형)도 다 들어올 수 있다.
// Map은 키가 정렬된 순서로 저장되기 때문이다.
// 기능 : 검색, 삭제, 제거, 여부 확인
// .. 반복 -> method : keys, values, entries

const myMap = new Map();

myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

// key 꺼내기
// console.log(myMap.keys());
// for (const key of myMap.keys()) {
//   console.log(key);
// }

// value 꺼내기
// console.log(myMap.keys());
// for (const value of myMap.values()) {
//   console.log(value);
// }

// key - value 다 꺼내기
// console.log(myMap.entries());
// for (const entry of myMap.entries()) {
//   console.log(entry);
// }

console.log(myMap.size); // 3
console.log(myMap.has('two')); // true -> two1을 하면 false
