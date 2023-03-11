function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    const result = arr1[i] | arr2[i];
    let bit = result.toString(2);
    if (bit.length < n) {
      const blank = " ".repeat(n - bit.length);
      bit = blank + bit;
    }
    const bitString = bit.replace(/1/gi, "#").replace(/0/gi, " ");
    answer.push(bitString);
  }

  return answer;
}
