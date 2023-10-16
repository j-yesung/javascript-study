// 객체 요소가 계속 늘어나도 for ~ in 으로 추가해 줌.
// 얕은 복사
var copyObject = function (target) {
  var result = {};

  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// user 객체를 생성
var user = {
  name: 'yesung',
  gender: 'male',
};

/**
 * 이름을 변경하는 함수 'changeName' 정의
 * 입력 : 변경 대상 user 객체, 변경하고자 하는 이름
 * 출력 : 새로운 user 객체
 * 특징 : 객체의 프로퍼티(속성)에 접근해서 이름 변경 -> 가변
 */
// let changeName = function (user, newName) {
//   return {
//     name: newName,
//     gender: user.gender,
//   };
// };

/**
 * 변경한 user 정보를 user2 변수에 할당
 * 가변이기 때문에 user1에도 영향이 감
 */
let user2 = copyObject(user);

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다.');
}

console.log(user2);
console.log(user);
console.log(user.name, user2.name); // 'yesung', 'yesungTwo'
console.log(user === user2); // true
