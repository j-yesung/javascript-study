// obj
// 2가지 속성
let obj = {
  vals: [1, 2, 3],
  logvalues: function (v, i) {
    if (this === global) {
      console.log('this가 global입니다. 원하지 않는 결과!');
    } else {
      console.log(this, v, i);
    }
  },
};

// method로서 호출
// obj.logvalues(1, 2);

// forEach, map, filter
[4, 5, 6].forEach(obj.logvalues);
