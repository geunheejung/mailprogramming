/*
안녕하세요, 매일프로그래밍 이번주 문제입니다.

정수 배열과 타겟 숫자가 주어지면, 합이 타겟값이 되는 두 원소의 인덱스를 찾으시오.

단, 시간복잡도 O(n) 여야 합니다.


예제)

Input: [2, 5, 6, 1, 10], 타겟 8

Output: [0, 2] // 배열[0] + 배열[2] = 8



 */

const findResultIndex = (input = []) => {
  const targetNum = 8;
  const notMathcingNum = new Map();

  for (let i = 0, iLen = input.length; i < iLen; i++) {
    let current = input[i];
    let point = notMathcingNum.get(targetNum - current);


    if (point !== undefined) {
      console.log(notMathcingNum)
      return `[${point}], [${i}]`;
    } else {
      notMathcingNum.set(input[i], i);
    }
  }
}

console.log(findResultIndex([2, 5, 1, 10, 6]));