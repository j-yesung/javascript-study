// 링크드리스트에는 노드가 있고 노드에는 포인터를 가지고 있다. 헤드, 테일

// 노드
class Node {
  // data -> '흑연', '자갈', '밀가루'
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  // 다음 노드 추가 메서드
  append(value) {
    // 현재 위치 확인 (currentHead에 담기)
    let currentHead = this.head;

    // 현재 위치가 null이 아니면
    while (currentHead.next !== null) {
      // 포인터
      currentHead = currentHead.next;
    }

    // console.log('tail => ', currentHead);
    const newNode = new Node(value);
    currentHead.next = newNode;
  }

  // index를 알고 있는 경우
  getNode(index) {
    /**
     * index가 길 경우 <- 에러 발생
     * 위 경우를 방지하기 위해서 최대 길이 보다 index가 큰지 작은지 검사
     */
    let node = this.head;

    // 포인터를 타고 간다.
    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  addNode(index, value) {
    const newNode = new Node(value);

    // 맨 앞 배치
    if (index === 0) {
      newNode = this.head;
      return;
    }

    // 추가하고 싶은 인덱스(위치) 앞에 있는 노드를 검색
    const node = this.getNode(index - 1);
    const nextNode = node.next;

    node.next = newNode;
    newNode.next = nextNode;
  }
}

// 인스턴스 생성 (초기값은 '흑연')
const linkedList = new LinkedList('흑연');

// 노드 추가
linkedList.append('밀가루');
linkedList.append('자갈');

// 흑연 -> 밀가루 -> 자갈
//  0       1      2

console.log(linkedList);
linkedList.addNode(1, '시멘트');
// console.log(linkedList.getNode(1));
console.log(linkedList);
