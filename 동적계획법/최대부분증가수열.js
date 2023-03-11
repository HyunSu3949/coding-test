function solution(arr, n) {
  let answer = 0;
  let dp = Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        max = Math.max(dp[j] + 1, dp[i]);
        dp[i] = max;
      }
      answer = Math.max(max, answer);
    }
  }

  return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4], 8));
