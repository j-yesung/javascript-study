// 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요.
var user = {
  name: 'john',
  age: 20,
};

/**
 *
 * @param {*} user 복사할 객체
 * @param {*} passedTime 더할 나이
 * @returns
 */
var getAged = function (user, passedTime) {
  // 여기를 작성해 주세요!
  let newUser = { ...user, age: user.age + passedTime };
  return newUser;
};

var agedUser = getAged(user, 6);
console.log(agedUser);
var agedUserMustBeDifferentFromUser = function (user1, user2) {
  if (!user2) {
    console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) {
    console.log('Passed! If you become older, you will be different from you in the past!');
  } else {
    console.log('Failed! User same with past one');
  }
};

agedUserMustBeDifferentFromUser(user, agedUser);
