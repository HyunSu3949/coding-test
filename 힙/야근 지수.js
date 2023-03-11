/* 
제한 사항
works는 길이 1 이상, 20,000 이하인 배열입니다.
works의 원소는 50000 이하인 자연수입니다.
n은 1,000,000 이하인 자연수입니다.

야근 비용을 최소화 하기 위해 현재 배열에서 가장 큰수를 낮춰야 한다.
가장 큰수를 뽑아서 1을 줄이고 다시 넣고 반복? -> 최대힙 

works가 20000 이니까 힙 트리 높이 =  log10000
1,000,000(n) 만큼 순회하면서 힙 pop, push => 시간복잡도: 1,000,000(n) * (log 10000(삭제 시간) + log 10000(삽입 시간)) < 10,000,000

*/

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      this._swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnVal = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        this._swap(currentIndex, rightIndex);
        currentIndex = rightIndex;
      } else {
        this._swap(currentIndex, leftIndex);
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnVal;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function solution(n, works) {
  const heap = new MaxHeap();

  for (const i of works) {
    heap.push(i);
  }

  while (n > 0) {
    const max = heap.pop();
    if (max == 0) break;
    heap.push(max - 1);
    n--;
  }

  return heap.heap.reduce((acc, c) => acc + c ** 2, 0);
}

console.log(solution(1, [2, 1, 2]));
