// 내가 생각했던 방법
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     console.log('i => ', i);
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       console.log('j => ', j);
//       if (arr[i] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[i] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     return arr;
//   }
// }

// console.log(bubbleSort([4, 2, 3, 7, 9]));

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

console.log(bubbleSort([4, 2, 3, 7, 9]));
