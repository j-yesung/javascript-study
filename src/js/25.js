/**
 * 상속
 * Class -> 유산으로 내려주는 주요 기능
 * 부모 <-> 자식
 */

// 동물 전체에 대한 클래스
class Animal {
  // 이름을 필수로
  constructor(name) {
    this.name = name;
  }

  // 동물의 행동을 정의하는 메소드
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// 동물 클래스를 상속받는 Dog 클래스 생성
class Dog extends Animal {
  // 상속받을 때, speak()를 입맛에 맞게 재정의
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Dog를 만들 때는 Animal의 상속을 받은 class이기 때문에 이름을 필수로..
let d = new Dog('Mitzie');

// speak는 'makes a noise'가 아니라, 'barks'가 출력
d.speak(); // "Mitzie barks."
