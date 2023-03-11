function solution(m, arr) {
  let dp = Array(m + 1).fill(0);
  let sortedArr = arr.sort((a, b) => a[1] - b[1]);

  for (let i = 1; i <= m; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (i - sortedArr[j][1] >= 0) {
        dp[i] = Math.max(dp[i - sortedArr[j][1]] + sortedArr[j][0], dp[i]);
      }
    }
  }

  return dp.sort((a, b) => b - a)[0];
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
