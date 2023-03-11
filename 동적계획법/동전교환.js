function solution(coins, M) {
  const dp = Array(M + 1).fill(Infinity);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= M; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
      }
    }
  }
  return dp[M] !== Infinity ? dp[M] : -1;
}

const coins = [1, 2, 5];
const money = 15;

console.log(solution(coins, money));
