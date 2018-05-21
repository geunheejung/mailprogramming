const f = ([...texts]) => {
  if (texts.length % 2 === 0) return false;

  const textsLen = texts.length;
  const beforeTexts = JSON.stringify(texts.slice(0, textsLen / 2)),
        afterTexts = JSON.stringify(texts.slice((textsLen / 2) + 1, textsLen).reverse());



  return beforeTexts === afterTexts;
}

const f2 = (n) => {
  if(n < 0 || (n % 10 == 0 && n != 0)) {
    return false;
  }

  let revertedHalf = n % 10,
      count = 10;

  while (n > revertedHalf) {
    revertedHalf = revertedHalf * 10 + (Math.floor(n / count) % 10)
    count *= 10;
  }
  console.log(revertedHalf)

  return revertedHalf === n;
}


console.log(f2(212));






