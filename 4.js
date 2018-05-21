const f = ([...texts]) => {
  if (texts.length % 2 === 0) return false;

  const textsLen = texts.length;
  const beforeTexts = JSON.stringify(texts.slice(0, textsLen / 2)),
        afterTexts = JSON.stringify(texts.slice((textsLen / 2) + 1, textsLen).reverse());



  return beforeTexts === afterTexts;
}

// 풀이 링크: http://bestcoding.tistory.com/18
const f2 = (n) => {
  // 정수여야하므로 0보다 크고, 끝 자리가 0인 경우 팰린드롬이 아님으로 걸러줌
  if(n < 0 || (n % 10 == 0 && n != 0)) {
    return false;
  }

  let revertedHalf = n % 10,
      count = 10;

  while (n > revertedHalf) { // 다 채워졌으면 loop 종료
    // n을 10으로 나눈 나머지값을 revertedHalf변수에 순서대로 채움
    // 10을 곱한 이유는 매 루프마다 자릿수를 맞춰주기 위함
    // 매 loop마다 n의 나머지를 할당한 만큼 자르기 위해 n / count로 하고 count변수는 매 loop마다 10씩 곱셈
    revertedHalf = revertedHalf * 10 + (Math.floor(n / count) % 10)
    count *= 10;
  }
  console.log(revertedHalf)

  return revertedHalf === n;
}


console.log(f2(212));






