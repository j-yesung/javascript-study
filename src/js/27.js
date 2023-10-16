/**
 * Static Method (정적 메소드)
 * Class -> 객체를 만들기 위해 사용
 * 다량으로, 안전하고, 정확하게
 */
class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(Calculator.add(1, 2)); // 3
console.log(Calculator.subtract(3, 2)); // 1
