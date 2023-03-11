function solution(N) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < N; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[N - 1];
}

console.log(solution(8));
