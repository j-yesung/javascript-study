function bubbleSort(items) {
  let length = items.length;
  for (let i = 0; i < length; i++) {
    console.log(`${i}회전`);
    // i번씩 돌 때 마다 뒤에는 이미 정렬되어 있는 상태니까 -i 해준다.
    // -1은 length가 5인데 4번만 돌면되서..
    for (let j = 0; j < length - i - 1; j++) {
      // 비교 하다가 오른쪽 수가 더 크면 좌우 자리 변경
      // 이동하면서 계속 비교한다. 만약에 큰 수면 계속 뒤로 밀려나겠지?
      if (items[j] > items[j + 1]) {
        console.log(`전 > ${items[j]}, ${items[j + 1]}`);
        let tmp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tmp;
        console.log(`후 > ${items[j]}, ${items[j + 1]}`);
      }
      console.log(items);
    }
  }
  console.log(items);
}

var arr = [5, 4, 3, 2, 1];
bubbleSort(arr);

// console.log(arr);

// 인터넷 참고
const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // 전통적인 swap
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        // ES2015문법 swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(`${i + 1}회 째 수행중입니다!!!`);
  }
  return arr;
};

// console.log(bubbleSort([4, 2, 3, 7, 9]));
