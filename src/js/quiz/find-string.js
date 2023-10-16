/**
 * @param {*} str 문자열
 * @returns 숫자 제거하고 그 만큼 더한 문자열 반환
 */
function findString(str) {
  let result = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    // 매개변수로 들어온 문자열 순서대로 검사해서 문자열로 들어오면 실행
    if (isNaN(str[i])) {
      result += str[i];
    } else {
      // 숫자로 들어오면 number 형 변환하고 문자열 찾고 그 만큼 문자 반복
      // repeat -> 위에서 이미 한번 저장했으니까 count - 1
      count = Number(str[i]);
      result += result.charAt(result.length - 1).repeat(count - 1);
    }
  }

  return result;
}

console.log(findString('a5b3c1'));
console.log(isNaN(111));
console.log(Number.isNaN('dasd'));
