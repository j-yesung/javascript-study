// 클래스 설계도 작성
class Person {
  // 우리는 사람이기 때문에 필수 요소
  // name, age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메서드 형태의 동사 표현
  sayHello() {
    console.log(`${this.name}님 안녕하세요.`);
  }

  printMyAge() {
    console.log(`${this.name} 나이는 ${this.age}살 입니다.`);
  }
}

// 설계도를 통해 인스턴스(실제 사물) 만들기
const person1 = new Person('yesung', 20);
const person2 = new Person('yesung2', 30);

// person1.sayHello();
person1.printMyAge();
