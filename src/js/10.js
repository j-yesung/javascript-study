// 깊은 복사를 진행하기 위한 함수
function deepCopy(value) {
  // 빈 객체 생성
  const result = {};
  // 매개변수 데이터를 복사
  for (const key in value) {
    if (typeof value[key] === 'object') {
      // 참조형 데이터일 경우 재귀함수를 통해 한번 더 복사
      result[key] = deepCopy(value[key]);
    } else {
      // 참조형이 아닐 경우 데이터를 빈 객체에 저장
      result[key] = value[key];
    }
  }
  // 할당된 객체 반환
  return result;
}

// obj 생성
let obj = {
  a: 1,
  b: { c: 1, d: 2 },
};

// obj2에 obj 깊은 복사 실행
let obj2 = deepCopy(obj);

// 값 비교
console.log(obj === obj2); // false

// obj2 요사 값 변경
obj2.a = 3;
obj2.b.c = 4;

// 결과
// console.log(obj.a, obj2.a); // 1 3
// console.log(obj.b, obj2.b); // {c: 1, d: 2} {c: 4, d: 2}

// JSON.stringify() 메소드를 활용한 참조형 데이터 깊은 복사
const obj3 = {
  a: 1,
  b: {
    c: 2,
  },
};

const copiedObj = JSON.parse(JSON.stringify(obj3));

copiedObj.b.c = 3;

obj3.b.c === copiedObj.b.c; //false
