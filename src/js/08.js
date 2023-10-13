/**
 * Set
 * 고유한 값을 저장하는 자료구조
 * 값만 저장
 * 키를 저장하지는 않음
 * 값이 중복되지 않는 유일한 요소로만 구성
 * 값 추가/검색/삭제/모든 값 제거/존재 여부 확인
 */

// Set 객체 생성
const mySet = new Set();

mySet.add('value1');
mySet.add('value2');
mySet.add('value2');
mySet.add('value3');
// 위 add 시 value2가 2개 있어서 중복되므로 1개로 통일되어 size는 2로 출력
console.log('mySet.size: ', mySet.size);
console.log(mySet.has('value1')); // true
console.log(mySet.has('value2')); // true
console.log(mySet.has('value3')); // true
console.log(mySet.has('value4')); // false

for (const value of mySet.values()) {
  console.log(value);
}
