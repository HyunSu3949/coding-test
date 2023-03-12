//카메라 조건 단순하게 생각해보기

function solution(routes) {
  let camera = [];
  let sr = routes.sort((a, b) => a[0] - b[0]);

  camera[1] = [sr[0][0], sr[0][1]];
  let cnt = 1;

  for (let i = 1; i < routes.length; i++) {
    if (sr[i][0] > camera[cnt][1]) {
      cnt++;
      camera[cnt] = [sr[i][0], sr[i][1]];
    } else if (sr[i][0] >= camera[cnt][0] && sr[i][1] <= camera[cnt][1]) {
      camera[cnt] = [sr[i][0], sr[i][1]];
    } else if (sr[i][0] >= camera[cnt][0] && sr[i][1] >= camera[cnt][1]) {
      camera[cnt][0] = sr[i][0];
    }
  }

  return cnt;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
