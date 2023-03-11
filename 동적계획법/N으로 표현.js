function solution(N, number) {
  const set = new Array(8).fill().map(() => new Set());

  for (let i = 0; i < 8; i++) {
    set[i].add(Number(`${N}`.repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (const num1 of set[j]) {
        for (const num2 of set[i - j - 1]) {
          set[i].add(num1 + num2);
          set[i].add(num1 - num2);
          set[i].add(num1 * num2);
          set[i].add(Math.floor(num1 / num2));
        }
      }
    }

    if (set[i].has(number)) {
      return i + 1;
    }
  }

  return -1;
}
