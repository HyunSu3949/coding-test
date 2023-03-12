function solution(k, d) {
  let answer = 0;
  const visited = new Array(N).fill(false);

  function dfs(k, cnt) {
    for (let i = 0; i < d.length; i++) {
      if (!visited && k - d[i][0]) {
        visited[i] = true;
        dfs(k, cnt + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, cnt);
  }
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
