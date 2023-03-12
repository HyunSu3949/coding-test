// 예외처리: 답이 없을 경우를 고려하자.
//
function solution(begin, target, words) {
  if (words.filter((el) => el === target).length === 0) {
    return 0;
  }

  let answer = Infinity;
  const visted = Array(words.length).fill(0);
  const wordL = begin.length;

  function checkWord(begin, compare) {
    let same = 0;
    for (let j = 0; j < wordL; j++) {
      if (begin[j] === compare[j]) {
        same++;
      }
    }

    return same === wordL - 1 ? true : false;
  }

  function DFS(begin, D) {
    if (checkWord(begin, target)) {
      if (words.includes(target)) {
        answer = Math.min(answer, D + 1);
      } else {
        answer = 0;
      }
    }

    for (let i = 0; i < words.length; i++) {
      if (!visted[i]) {
        if (checkWord(begin, words[i]) && !visted[i]) {
          visted[i] = 1;
          DFS(words[i], D + 1);
        }
      }
    }
  }

  DFS(begin, 0);

  return answer;
}
