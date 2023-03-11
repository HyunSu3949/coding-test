function solution(n, computers) {
  let answer = n;
  let visit = Array(n).fill(0);

  function dfs(i) {
    visit[i] = 1;
    const computer = computers[i];
    for (let j = 0; j < computer.length; j++) {
      if (visit[j] == 0 && j !== i && computer[j] === 1) {
        answer--;
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    dfs(i);
  }

  return answer;
}
