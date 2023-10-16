/**
 * 명시적 this binding
 * call. apply, bind
 */
// call
var func = function (a, b, c) {
  console.log(this, a, b, c);
};

// no binding
func(1, 2, 3);

// 명시적 binding
func.call({ x: 1 }, 4, 5, 6);

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

obj.method(2, 3); // 1 2 3
obj.method.call({ a: 4 }, 5, 6); // 4 5 6
obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
