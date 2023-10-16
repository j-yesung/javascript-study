/**
 * 클래스 연습해보기
 * Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는 다음 네 개의 값이 필수로 입력되어야 합니다.
 * (1) modelName
 * (2) modelYear
 * (3) type
 * (4) price
 * makeNoise() 메서드를 만들어 클락션을 출력해 주세요.
 * 이후 자동차를 3개 정도 만들어 주세요. (객체 - 인스턴스 생성)
 */

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  carInfo() {
    console.log(
      `차 이름은 ${this.modelName}이고 만들어진 년도는 ${this.modelYear}년이고 ${this.type}차종이며 가격은 ${this.price}입니다.`,
    );
  }

  makeNoise() {
    console.log('클락션');
  }
}

const car1 = new Car('벤틀리', 1930, 'SUV', '3억');
const car2 = new Car('포르쉐', 1910, '세단', '5억');
const car3 = new Car('벤츠', 1940, 'SUV', '1억');

car1.carInfo();
car1.makeNoise();
car2.carInfo();
car2.makeNoise();
car3.carInfo();
car3.makeNoise();
