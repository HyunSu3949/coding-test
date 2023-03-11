// dp => 작은문제로 큰문제 해결하기.
// 순열과 같은 방법은 시간복잡도가 크기에 동적계획법으로 풀이 가능한지 확인

function solution(strs, t) {
  const dp = Array.from({ length: t.length + 1 }, () => 0);

  for (let i = 1; i < t.length + 1; i++) {
    dp[i] = Infinity;
    const current = t.slice(0, i);

    for (let j = 1; j <= 5 && j <= i; j++) {
      const start = i - j;
      const end = i;

      if (strs.includes(current.slice(start, end))) {
        const diff = current.length - (end - start);

        if (diff === 0) {
          dp[i] = 1;
        } else {
          dp[i] = Math.min(dp[i], dp[diff] + 1);
        }
      }
    }
  }

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}
