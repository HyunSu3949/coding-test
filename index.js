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
