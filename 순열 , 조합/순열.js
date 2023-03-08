// 순열: 서로 다른 x개의 원소에서 n개를 중복없이 순서에 상관있게 선택하는 혹은 나열하는 것
// 순열의 시간복잡도는 O(n!). n이 크지 않기 때문에 재귀로 외우는것이 편함.

function premutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index !== idx);
    const perms = premutations(rest, n - 1);
    const combined = perms.map((v) => [fixed, ...v]);

    result.push(...combined);
  });

  return result;
}
